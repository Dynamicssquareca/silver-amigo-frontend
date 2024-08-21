import Link from "next/link";
import React from "react";
const CartItemsUserReview = () => {
  return (
    <div>
      <div className="jba-cart-product jba-cart-product-user">
        <div className="p-pic">
          <a href="/products/abc">
              <img src="/img/shop/prodct-dummy-1.png" alt="img" />
          </a>
        </div>
        <div className="product-dec">
          <h3>
            <a href="/products/abc">
               Pearl Diamond Hoops 
            </a>
          </h3>
          <span className="sku">SKU : 54FG3FDH31GFH</span>
          <span className="p-price">
            15,999 <span className="old-p">₹ 19,500</span>
          </span>
          <div className="p-size">
            <div>
              <span className="size-head">Size:</span>
            </div>
            <div className="fomr-sec">
              <select className="form-select">
                <option selected>16</option>
                <option value="1">14</option>
                <option value="2">18</option>
                <option value="3">12</option>
              </select>
            </div>
          </div>
        </div>
        <div className="deliver-date deliver-date-re">
          <img src="/img/themepic/icons/package.png" alt="package" />{" "}
          <span>Delivery by- 26th Aug</span>
        </div>
      </div>
      <div className="cust-rev">
        <div className="product-rate-cover">
          <div className="row">
            <div className="col-lg-4">
              <div className="left">
                <div className="d-flex">
                  <div className="ratings">
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                    <i className="bi bi-star"></i>
                  </div>
                </div>
                <div className="add-r-but">
                  <a className="btn btn-md">Add a review</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right">
                <div className="icn-box">
                  <a href="/myaccounts/order/return-order/">
                    <div className="box">
                      <img
                        src="/img/themepic/icons/exchange.png"
                        alt="exchange"
                      />
                    </div>
                    <span>Exchange</span>
                  </a>
                </div>
                <div className="icn-box">
                  <a href="#">
                    <div className="box">
                      <img
                        src="/img/themepic/icons/invoice.png"
                        alt="invoice"
                      />
                    </div>
                    <span>Invoice</span>
                  </a>
                </div>
                <div className="icn-box">
                  <a href="#">
                    <div className="box">
                      <img
                        src="/img/themepic/icons/e-certificate.png"
                        alt="e-certificate"
                      />
                    </div>
                    <span>E-Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="usr-address">
          <h3>Delivery Address</h3>
          <div className="address">
            <span>
              Abhinav Chauhan <br />
              Gurgaon , 122002
              <br />
              Haryana
              <br />
              India
            </span>
          </div>
        </div>
        <div className="usr-p-price-details">
        <h3>Price Detail</h3>
        <div className="prc">
          <table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td className="text-right">₹30,998</td>
              </tr>
              <tr>
                <td>Total Discount</td>
                <td className="text-right">-1500</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td className="text-right">FREE</td>
              </tr>
              <tr>
                <td>Total Cost</td>
                <td className="text-right">₹29,498</td>
              </tr>
              <tr>
                <td>Payment Method</td>
                <td className="text-right">Credit Card</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsUserReview;
