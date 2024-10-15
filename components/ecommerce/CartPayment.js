import React from "react";
 
const CartPayment = ({ paymentType, setPaymentType, handleOrder,totalpay }) => {
    return (
        <div className="cart-payment">
            <h3>Select Payment Method</h3>
            {/* <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="paymentOptions"
                    id="razorpayOption"
                    value="1"
                    checked={paymentType === "1"}
                    onChange={() => setPaymentType("1")}
                />
                <label className="form-check-label" htmlFor="razorpayOption">RazorPay</label>
            </div> */}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="paymentOptions"
                    id="codOption"
                    value="2"
                    checked={paymentType === "2"}
                    onChange={() => setPaymentType("2")}
                />
                <label className="form-check-label" htmlFor="codOption">Cash On Delivery</label>
            </div>
            <div className="check-out mt-50 price-btn">
                <button type="button" className="btn btn-primary" onClick={() => handleOrder(paymentType === "2")}>
                Pay ₹ {totalpay.toLocaleString()}
                </button>
            </div>
           
        </div>
    );
};
 
export default CartPayment;