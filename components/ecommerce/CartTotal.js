import React from "react";


const CartTotal = ({ subtotal, discount, shippingCost, total }) => {

  return (
    <div className="cart-total-price">
      <div className="order-summery mt-30">
        <h3 className="mb-25">Order Summary</h3>

        <div className="price-tab">
            <table className="sub-total">
                <tbody>
                <tr>
                    <th>Subtotal</th>
                    <td>{subtotal.toLocaleString()}</td>
                </tr>
                {/* <tr>
                    <th>Total Discount</th>
                    <td>-{discount.toLocaleString()}</td>
                </tr> */}
                <tr>
                    <th>Shipping(standard)</th>
                    <td>Free</td>
                </tr>
                </tbody>
                
            </table>
            <hr className="border-hr-colo" />
            <table className="total-price">
            <tbody>
                <tr>
                    <th>Total Cost</th>
                    <td>₹ {total.toLocaleString()}</td>
                </tr>
                </tbody>
            </table>
            <div className="check-out mt-50">
    
            <a href="/checkout/" type="submit" className="btn btn-primary">Place Order</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
