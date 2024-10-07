
import React from "react";
const CartItems = ({ item, updateQuantity }) => {
  const { product_name, image, sale_price, offer_price,category,qty, delivery_date,slug } = item;
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';

    const date = new Date(dateString);
    date.setDate(date.getDate() + 7);

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };
  return (
    <div>
      <div className="jba-cart-product">
        <div className="p-pic">
        <a href={`/collections/${category.slug}/${slug}`}>
              <img src={image} alt="img" />
            </a>
          
        </div>
        <div className="product-dec">
          <h3><a href={`/collections/${category.slug}/${slug}`}>{product_name}</a></h3>
          {/* <span className="p-price">
          ₹ {offer_price.toLocaleString()}<span className="old-p">₹ {sale_price.toLocaleString()}</span>
          </span> */}
          <span className="p-price">₹ {sale_price.toLocaleString()}</span>
          <div className="quantity">
          <a href="#" className="quantity__minus" onClick={() => updateQuantity(item, -1)}>
            <span>-</span>
          </a>
          <input name="quantity" type="text" className="quantity__input" value={qty} readOnly />
          <a href="#" className="quantity__plus" onClick={() => updateQuantity(item, 1)}>
            <span>+</span>
          </a>
        </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default CartItems;
