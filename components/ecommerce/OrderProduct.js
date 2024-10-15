import React from "react";


const OrderProduct = ({ products }) => {
  
  const totalAmount = products.reduce((total, product) => {
   
    const productSubtotal = parseFloat(product.sub_total) || 0;
    return total + productSubtotal;
  }, 0);
  
  
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="jba-cart-product">
          <div className="p-pic">
            <img
              src={product.product_image}
              alt={product.product_name}
            />
          </div>
          <div className="product-dec">
            <h3 className="success-product-title">{product.product_name}</h3>
            <span className="sku">SKU: {product.product_sku_code}</span>
            <span className="p-price">
               {Math.floor(product.amount).toLocaleString('en-IN')}
            </span>
            <span className="qty">Quantity: {product.qty}</span>
          </div>
        </div>
      ))}
      <h3 className="total-amount-text text-right">
        Total Amount:  {Math.floor(totalAmount).toLocaleString('en-IN')}
      </h3>
      <style jsx>{`
        .success-product-title {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};
 
export default OrderProduct;