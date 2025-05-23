import React, { useEffect, useState } from "react";
import CartItems from "components/ecommerce/CartItems";
import CartTotal from "components/ecommerce/CartTotal";
import Head from "next/head";
import AppURL from "@/pages/api/AppUrl";  
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const [cartData, setCartData] = useState([]);
  const [cartTotals, setCartTotals] = useState({
    subtotal: 0,
    discount: 0,
    shippingCost: 0,
    total: 0,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); 
    fetchCartData(token); 
  }, []);

  const fetchCartData = async (token) => {
    let cartItems = [];
    console.log(cartItems);
    if (token) {
       
      try {
        const response = await fetch(AppURL.UserGetCartItems, {
          method: "GET",
          headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        cartItems = data.data || [];
        console.log(data.data);
      } catch (error) {
        console.error("Failed to fetch cart from API:", error);
      }
    } else {
      
      cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    }

    
    if (!Array.isArray(cartItems)) {
      cartItems = Object.values(cartItems);  
    }

    setCartData(cartItems);
    calculateCartTotals(cartItems);
    setLoading(false);
  };

  const calculateCartTotals = (cartItems) => {
   
    if (!Array.isArray(cartItems)) return;

    const subtotal = cartItems.reduce((acc, item) => acc + item.sale_price * item.qty, 0);
    const discount = 0; 
    const shippingCost = subtotal > 1000 ? 0 : 50;
    const total = subtotal - discount + shippingCost;
    setCartTotals({ subtotal, discount, shippingCost, total });
  };

  const updateQuantity = async (item, change) => {
    const updatedCart = cartData.map((cartItem) => {
      if (cartItem.id === item.id) {
        const newQty = cartItem.qty + change;
        return { ...cartItem, qty: newQty > 0 ? newQty : 1 };
      }
      return cartItem;
    });

    setCartData(updatedCart);
    calculateCartTotals(updatedCart);
 
    if (!isLoggedIn) {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    else{
      try {
        const token = localStorage.getItem('authToken');
        const cartUpdates = updatedCart.map(cartItem => ({
          product_id: cartItem.product_id,
          qty: cartItem.qty, 
        }));
        const response = await fetch(AppURL.UserUpdateCartItems, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cart_items: cartUpdates }),
        });

        const result = await response.json();
        if (result.status !== 1) {
          console.error('Failed to update cart on backend:', result.message);
        }
      } catch (error) {
        console.error('Error syncing cart with backend:', error);
      }
    }
  };

  const removeFromCart = async (productId) => {
    const token = localStorage.getItem("authToken");
    let cartData = JSON.parse(localStorage.getItem('cart')) || [];
    if (token) {
       
      try {
        const response = await fetch(AppURL.UserRemoveCartItem(productId), {
          method: 'GET', 
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
    const data = await response.json();
    if (data.status == 1) {
     
      const updatedCart = cartData.filter(item => item.product_id !== productId);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      localStorage.setItem('cartcount', updatedCart.length);
      setCartData(updatedCart);  
      router.reload();
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error('Error:', error);
  }
} else {
  
  const updatedCart = cartData.filter(item => item.product_id !== productId);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  localStorage.setItem('cartcount', updatedCart.length);
  setCartData(updatedCart); 
  router.reload();
}
  };
  

  return (
    <>
      <Head>
        <title>Cart | Silver Amigo</title>
        <meta
          name="description"
          content="Silver Amigo dives into the spirit of everyday celebration, reflecting on the ethos of luxury through minimal gold jewelry."
        />
      </Head>

      <div className="page-header breadcrumb-wrap mt-50 mb-50">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span></span>Shop<span></span>Cart
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
                    <h1 className="heading-cart">Your Cart</h1>
                    {loading ? (
                      <div className="leadong-p"><div className="padd"><p>Loading...</p></div></div>
                    ) : cartData.length > 0 ? (
                      cartData.map((item, index) => (
                        <CartItems key={index} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
                      ))
                    ) : (
                      <p>Your cart is empty</p>
                    )}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div>
                    {cartData.length>0 ? (<CartTotal {...cartTotals} />) : ''}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       
    </>
  );
};

export default Cart;
