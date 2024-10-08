import React,{useContext}from "react";
import { useRouter } from 'next/router';
 

const ShippingTotal = ({ subtotal, totalDiscount, shipping, totalCost }) => {
  const router = useRouter();

  
  

  return (
    <div className="cart-total-price">
      <div className="order-summery mt-30">
        <h3 className="mb-25">Order Summary</h3>

        <div className="price-tab">
          <table className="sub-total">
            <tbody>
              <tr>
                <th>Subtotal</th>
                <td>₹ {subtotal.toLocaleString()}</td>
              </tr>
              {/* <tr>
                <th>Total Discount</th>
                <td>-₹ {totalDiscount.toFixed(2)}</td>
              </tr> */}
              <tr>
                <th>Shipping(standard)</th>
                <td>{shipping}</td>
              </tr>
            </tbody>
          </table>
          <hr className="border-hr-colo" />
          <table className="total-price">
            <tbody>
              <tr>
                <th>Total Cost</th>
                <td>₹ {totalCost.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          {/* <div className="check-out mt-50">
            <a href="#"  type="submit" className="btn btn-primary">Pay Now</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ShippingTotal;