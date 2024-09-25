import Link from "next/link";
import React from "react";
import Image from "next/image";
const SingleProductShop = ({ productName, productSlug, productprice, frontImg, backImg,category_name }) => {
  const imageBaseUrl = "http://127.0.0.1:8000/uploads/products/";
  return (
    <>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
          <a href={`/collections/${category_name}/${productSlug}`}>
              <img
                className="default-img"
                src={`${imageBaseUrl}${frontImg}`}
                alt={productName}
                width={354}
                height={354}
              />
              <img
                className="hover-img"
                src={`${imageBaseUrl}${backImg}`}
                alt={productName}
                width={354}
                height={354}
              />

            </a>
          </div>
        </div>
        
        <div className="product-content-wrap">
          <h2>
          <a href={`/collections/${category_name}/${productSlug}`}>
              {productName.substring(0, 32)}
            </a>
          </h2>
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

export default SingleProductShop;
