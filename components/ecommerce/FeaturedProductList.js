import Link from "next/link";
import React, { useState } from "react";
import Image from 'next/image'
const FeaturedProductList = ({productName,productSlug,productprice,sku,frontImg,backImg,category_name}) => {  

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
            src={`${process.env.NEXT_PUBLIC_BACKENDAPI_URL}uploads/products/${frontImg}`}
            alt={productName}
            width={250}
            height={250}
            />
            <img
            className="hover-img"
            src={`${process.env.NEXT_PUBLIC_BACKENDAPI_URL}uploads/products/${backImg}`}
            alt={productName}
            width={250}
            height={250}
            /> 
            </a>
          </div>
        </div>
        
        <div className="product-content-wrap">
          <div className="product-category">
            <a href={`/collections/category_name/${productSlug}`}></a>
          </div>
          <h2>
            <a href={`/collections/category_name/${productSlug}`}>
              {productName.substring(0,33)} 
            </a>
          </h2>
          <div>
          </div>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>₹ {productprice}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductList;
