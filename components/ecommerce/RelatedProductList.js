import Link from "next/link";
import React, { useState, useRef} from "react";
 import Image from "next/image";
const RelatedProductList = ({productName,productSlug,category_name,productPrice,sku,frontImg,backImg}) => {  
  const imageBaseUrl = "http://127.0.0.1:8000/uploads/products/";  
  return (
    
    <>

<div>
      
    </div>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
       
          <div className="product-img product-img-zoom">
          <a href={`/collections/${category_name}/${productSlug}`}>
            <img
            className="default-img"
            src={`${imageBaseUrl}${frontImg}`}
            alt={productName}
            width={365}
            height={365}
            />
            <img
            className="hover-img"
            src={`${imageBaseUrl}${backImg}`}
            alt={productName}
            width={365}
            height={365}
            />
              </a>
              </div>
       
        </div>
         
        <div className="product-content-wrap">
          <div className="product-category">
          </div>
          <h2>
          <a href={`/collections/${category_name}/${productSlug}`}>
          {productName.substring(0,35)} 
            </a>
          </h2>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>₹ {productPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProductList;
