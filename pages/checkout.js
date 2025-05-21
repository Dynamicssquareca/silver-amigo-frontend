import React, { useState, useEffect } from "react";
import Head from "next/head";
import UserCheckoutAddress from "@/components/user/UserCheckoutAddress";
import CartPayment from "@/components/ecommerce/CartPayment";
import ShippingTotal from "components/ecommerce/ShippingTotal";
import UserCheckoutLogin from "@/components/user/UserCheckoutLogin";
import AppURL from "./api/AppUrl";
import useAuth from "@/pages/hooks/userAuthCheckout";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [paymentType, setPaymentType] = useState("2");
    const { userData, loading } = useAuth();

    useEffect(() => {
        const fetchCartItems = async () => {
            const token = localStorage.getItem("authToken");

            if (userData && token) {
                try {
                    const response = await fetch(AppURL.UserGetCartItems, {
                        method: "GET",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });
                    const data = await response.json();
                    if (data.status === 1) {
                        setCartItems(data.data);
                    }
                } catch (error) {
                    console.error("Error fetching cart items:", error);
                }
            } else if (!userData) {
                const guestCart = JSON.parse(localStorage.getItem("cart")) || {};
                const guestCartItems = Object.values(guestCart);
                setCartItems(guestCartItems);
            }
        };

        fetchCartItems();
    }, [loading, userData]);

    const calculateTotals = (items) => {
        let subtotal = 0;
        let totalDiscount = 0;

        items.forEach((item) => {
            const salePrice = parseFloat(item.sale_price);
            const discountAmount = parseFloat(item.discount_amount) || 0;
            subtotal += salePrice * item.qty;
            totalDiscount += discountAmount * item.qty;
        });

        return { subtotal, totalDiscount, shipping: "FREE", totalCost: subtotal };
    };

    const placeOrder = async (token, totalCost, paymentType) => {
        try {
            const response = await fetch(AppURL.UserCheckout, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: Math.floor(totalCost) * 100,
                    address_id: selectedAddress,
                    payment_type: paymentType,
                }),
            });

            const data = await response.json();
            if (data.status === 1) {
                window.location.replace(`/order-success?orderId=${data.order}`);
            } else {
                alert("Failed to place order: " + data.message);
            }
        } catch (error) {
            console.error("Order placement error:", error);
        }
    };

    const initiateRazorpayPayment = async (razorpayOrderId, totalCost, token) => {
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            amount: Math.floor(totalCost) * 100,
            currency: "INR",
            name: "Silver Amigo",
            description: "Payment for Cart Items",
            order_id: razorpayOrderId,
            handler: async function (response) {
                try {
                    const verifyResponse = await fetch(AppURL.UserVerifyPayment, {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            payment_id: response.razorpay_payment_id,
                            order_id: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                            amount: Math.floor(totalCost) * 100,
                        }),
                    });

                    const verifyData = await verifyResponse.json();
                    if (verifyData.status === 1) {
                        await placeOrder(token, totalCost, 1);
                    } else {
                        alert("Payment verification failed.");
                    }
                } catch (error) {
                    console.error("Verification failed:", error);
                    alert("Error verifying payment. Please contact support.");
                }
            },
            prefill: {
                name: userData?.name || "",
                email: userData?.email || "",
                contact: userData?.phone || "",
            },
            theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    const handleOrder = async () => {
        if (!selectedAddress) {
            alert("Please select an address before proceeding.");
            return;
        }

        const token = localStorage.getItem("authToken");
        if (!token) {
            alert("User not authenticated.");
            return;
        }

        const { totalCost } = calculateTotals(cartItems);

        if (paymentType === "1") {
            // Razorpay - first create Razorpay order
            try {
                const res = await fetch(AppURL.CreateRazorpayOrder, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: Math.floor(totalCost) * 100 }),
                });

                const data = await res.json();
                if (data.status === 1) {
                    initiateRazorpayPayment(data.order_id, totalCost, token);
                } else {
                    alert("Failed to initiate payment: " + data.message);
                }
            } catch (error) {
                console.error("Error initializing Razorpay:", error);
            }
        } else {
            // COD
            await placeOrder(token, totalCost, 2);
        }
    };

    if (loading) return <div>Loading...</div>;

    const { subtotal, totalDiscount, shipping, totalCost } = calculateTotals(cartItems);

    return (
        <>
            <Head>
                <title>Checkout | Silver Amigo</title>
                <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
                <script src="https://checkout.razorpay.com/v1/checkout.js" defer></script>
            </Head>
            <div className="page-header breadcrumb-wrap mt-50 mb-50">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span></span>Checkout
                    </div>
                </div>
            </div>
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="cart-right-b">
                                        <h3 className="heading-cart">Secure Checkout</h3>
                                        {userData ? (
                                            <UserCheckoutAddress onAddressSelect={setSelectedAddress} />
                                        ) : (
                                            <UserCheckoutLogin />
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    {cartItems.map((item, index) => (
                                        <div className="user-cart-left" key={index}>
                                            <div className="car-l">
                                                <img src={item.image} alt={item.product_name} />
                                            </div>
                                            <div className="car-r">
                                                <div className="item-title">{item.product_name}</div>
                                                <div className="item-price">₹ {item.sale_price}</div>
                                                <div className="c-title">
                                                    Quantity: <span>{item.qty}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <ShippingTotal
                                        subtotal={subtotal}
                                        totalDiscount={totalDiscount}
                                        shipping={shipping}
                                        totalCost={totalCost}
                                    />
                                    {userData && (
                                        <CartPayment
                                            paymentType={paymentType}
                                            setPaymentType={setPaymentType}
                                            handleOrder={handleOrder}
                                            totalpay={totalCost}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Checkout;
