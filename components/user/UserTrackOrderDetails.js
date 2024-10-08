import React from "react";
import ProgressSteps from '../elements/ProgressSteps';

const UserTrackOrderDetails = ({ items, address ,Subtotal,order}) => {
  
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <div>No item details available.</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';

    const date = new Date(dateString);
    date.setDate(date.getDate() + 7);

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };
 
  
  const steps = ['Order Confirmed', 'Shipped', 'Delivered'];
  const getOrderStatus = () => {
    const salesDetail = order?.getsalesdetailchild[0];
    
    return salesDetail?.order_status || 0; 
  };

   
  const getProgressPercent = (status) => {
    switch (status) {
      case 1:
        return 33; 
      case 10:
        return 66;  
      case 9:
        return 100;  
      default:
        return 0;  
    }
  };

  const orderStatus = getOrderStatus();
  const progressPercent = getProgressPercent(orderStatus);


  return (
    
    <div>
         <ProgressSteps steps={steps} progressPercent={progressPercent} />
      {items.map((item, index) => (
        <div key={index} className="jba-cart-product jba-cart-product-user">
          <div className="p-pic">
          <img src={item.product_image} alt={item.product_name} />
          </div>
          <div className="product-dec">
            <h3>{item.product_name || 'Product Name'}</h3>
            <span className="sku">SKU: {item.product_sku_code || 'N/A'}</span>
            <span className="p-price"> {Math.floor(item.amount) || '0.00'}</span>
          </div>
          <div className="deliver-date deliver-date-re">
            <img src="/img/themepic/icons/package.png" alt="package" />
            <span>Delivery by- {formatDate(item.created_at)}</span>
          </div>
        </div>
      ))}
      <div className="cust-rev">
        <div className="usr-address">
          <h3>Delivery Address</h3>
          <div className="address">
            <span>
              {address.name}
              <br />
              {address.address_line1}, {address.address_line2}
              <br />
              {address.get_city_name.name}, {address.get_state_name.name}, {address.get_state_name.country_code}
              <br />
              {address.mobile}
              <br />
              {address.email}
              <br />
              {address.pincode}
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
                  <td className="text-right">{Math.floor(Subtotal.subtotal)}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className="text-right">FREE</td>
                </tr>
                <tr>
                  <td>Total Cost</td>
                  <td className="text-right">{Math.floor(Subtotal.subtotal)}</td>
                </tr>
                <tr>
                  <td>Payment Method</td>
                  <td className="text-right">COD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTrackOrderDetails;