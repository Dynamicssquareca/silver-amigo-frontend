import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import NewArrivalProductList from "../ecommerce/NewArrivalProductList";

SwiperCore.use([Navigation]);

const NewArrivalProduct = ({newarrivaldata}) => {
    


    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  breakpoints={{
                    0:{
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1300: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1400: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                  }}
                
                navigation={{
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n",
                }}
                className="my-swiper-containers"
                  >
                    { newarrivaldata && newarrivaldata.map((item,i) =>(
                    <SwiperSlide key={i}>
                    {item.first_variant.images && (
                      <NewArrivalProductList
                        productName={item.name}
                        productSlug={item.first_variant.slug}
                        productprice={item.first_variant.sale_price}
                        sku={item.product_sku_id}
                         
                        frontImg={item.first_variant.images.split(',')[0]}   
                        backImg={item.first_variant.images.split(',')[1]}  
                        category_name={item.category.slug} 
                      />
                    )}
                  </SwiperSlide>
                    ))}
            </Swiper>

            
            
        </>
    );
};

export default NewArrivalProduct;
