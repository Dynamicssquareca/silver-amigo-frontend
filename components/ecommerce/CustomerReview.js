import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
SwiperCore.use([Navigation]);

const CustomerReview = ({reviewdata}) => {
  const imageBaseUrl = "http://127.0.0.1:8000/uploads/testimonials/"; 
  return (
    <>
      <Swiper
        
        breakpoints={{
          0: {
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
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}

        navigation={{
          prevEl: ".custom_prev_n",
          nextEl: ".custom_next_n",
        }}
        className="my-swiper-containers my-swiper-containers-he"
      >
          { reviewdata && reviewdata.map((item,i) =>(
          <SwiperSlide key={i}> 
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <img src={`${imageBaseUrl}${item.profile_image}`} alt={item.name} width={80} height={80} />
              <span className="name">{item.name}</span>
              <div className="star-rate">
              {[...Array(5)].map((_, index) => (
            <span key={index} className={`bi ${index < item.rating ? 'bi-star-fill checked' : 'bi-star'}`}></span>
              ))}
              
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomerReview;
