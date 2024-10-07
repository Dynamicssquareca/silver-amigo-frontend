import React, { useState} from "react";
import RelatedProduct from "./RelatedProduct";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from "reactstrap";
import ThumbSlider from "../sliders/Thumb";
import AppURL from "@/pages/api/AppUrl";

const ProductDetailsnew = ({productData,relatedProducts}) => {
  const[relatedProductData] = useState(relatedProducts);
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  
  const addToCart = (productId, quantity) => {
    let cartData = JSON.parse(localStorage.getItem('cart')) || {};
    if (cartData[productId]) {
      alert('Product already added to the cart.');
    } else {
      fetch(AppURL.UserAddtoCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          qty: quantity,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Product successfully added into cart') {
            cartData[productId] = data.data[productId];
            localStorage.setItem('cart', JSON.stringify(cartData));
            const cartCount = Object.keys(cartData).length;
            localStorage.setItem('cartcount', cartCount);
            window.location.replace('/cart');
          } else {
            console.error(data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };


  const buyNow = (productId, quantity) => {
    let cartData = JSON.parse(localStorage.getItem('cart')) || {};
    if (!cartData[productId]) {
       
      fetch(AppURL.UserAddtoCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          qty: quantity,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === 'Product successfully added into cart') {
            cartData[productId] = data.data[productId];
            localStorage.setItem('cart', JSON.stringify(cartData));
            const cartCount = Object.keys(cartData).length;
            localStorage.setItem('cartcount', cartCount);
            window.location.replace('/checkout');
          } else {
            console.error(data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      window.location.replace('/checkout');
    }
  };
 
  return (
    <section className="mb-50">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="jba-product-main">
              <div className="row mb-50  mt-30">
                <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery sticky-top-product">
                    
                    <div className="product-image-slider">
                      <ThumbSlider imageOne={productData.images.split(',')[0]} imageTwo={productData.images.split(',')[1]} productName={productData.name}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="jba-detail-single  pr-30 pl-30">
                    <div className="jba-single-dec">
                      <div className="heading">
                        <h1>{productData.name}</h1>
                        <span>SKU: {productData.sku_id}</span>
                        <p>{productData.short_description}</p>
                      </div>
                    </div>
                    <div className="jab-product-sigle-price">
                      <span className="orginal-price">₹ {productData.sale_price}</span>
                    </div>
                    <div className="add-t-cart">
                      <a href="#">
                      <button
                        className="btn btn-1"
                        type="button"
                        id="button-addon1"
                        onClick={() => addToCart(
                          productData.product_id
                          , 1)} 
                      >
                        Add to Cart
                      </button>
                      </a>
                      <button
                        className="btn btn-2"
                        type="button"
                        id="button-addon2"
                        onClick={() => buyNow(productData.product_id, 1)}
                      >
                       Buy Now
                      </button>
                      </div>
                      <div className="jba-our-exp">
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{pointerEvents:'none'}}>
                            <source
                              src="/videos/Exuisite-Craftmanship.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          Exquisite <br /> Craftsmanship
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{pointerEvents:'none'}}>
                            <source
                              src="/videos/Bis-logo.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          100% Hallmarked <br /> Jewelry
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{pointerEvents:'none'}}>
                            <source
                              src="/videos/Giftworthy-packaging.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          Gift-Worthy <br /> Packaging
                        </span>
                      </div>
                    </div>
                    <div className="jba-prod-dec-bootm-acc">
                      <Accordion
                        className="jab-accordion"
                        open={open}
                        toggle={toggle}
                      >
                        <AccordionItem>
                          <AccordionHeader targetId="1" tag="h3">
                            Special Offers
                          </AccordionHeader>
                          <AccordionBody accordionId="1">
                            <div className="jba-discount-info-box">
                              <div className="jba-discount-info">
                                <span className="h-tag-h">FLAT20</span>
                                <span className="h-tag">
                                  Get 20% OFF on First Purchase
                                </span>
                                <span className="h-tag-term">
                                  <a href="#"> Term & Conditions</a>
                                </span>
                              </div>
                              <div className="jba-discount-info">
                                <span className="h-tag-h">FESTIVE10</span>
                                <span className="h-tag">
                                  Festive offer Get 10% OFF
                                </span>
                                <span className="h-tag-term">
                                  <a href="#"> Term & Conditions</a>
                                </span>
                              </div>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionHeader targetId="2" tag="h3">
                            Product Description
                          </AccordionHeader>
                          <AccordionBody accordionId="2">
                            <div className="pro-single-details-inf">
                              {productData.meta_description}
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {relatedProductData && relatedProductData.length >=1 && (
        <div className="row mt-60">
        <div className="col-12">
          <h3 className="section-title style-1 mb-30">Related products</h3>
        </div>
        <div className="col-12">
        <div className="row related-products position-relative">
      
        <RelatedProduct  productrelatedData={relatedProductData}/>
          </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetailsnew;
