import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import RelatedProductList from "./RelatedProductList";
 
SwiperCore.use([Navigation]);
 
const RelatedProduct = ({ productrelatedData }) => {
    return (
        <>
            <Swiper
                autoplay={{ delay: 2500, disableOnInteraction: true }}
                breakpoints={{
                    0: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 1, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 10 },
                    1300: { slidesPerView: 3, spaceBetween: 10 },
                    1400: { slidesPerView: 4, spaceBetween: 10 },
                }}
                navigation={{ prevEl: ".custom_prev_n", nextEl: ".custom_next_n" }}
                className="custom-class"
            >
                {productrelatedData && productrelatedData.length > 0 ? (
                    productrelatedData.map((item, i) => (
                        <SwiperSlide key={i}>
                            <RelatedProductList
                                productName={item.name}
                                productSlug={item.variants[0].slug}  
                                productPrice={item.variants[0].sale_price}  
                                sku={item.sku_id}  
                                frontImg={item.variants[0].images.split(',')[0]}  
                                backImg={item.variants[0].images.split(',')[1]}  
                                category_name={item.category.slug}
                            />
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No related products found.</p>
                )}
            </Swiper>
 
            <div className="slider-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                    <i className="bi bi-chevron-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                    <i className="bi bi-chevron-right"></i>
                </span>
            </div>
        </>
    );
};
 
export default RelatedProduct;