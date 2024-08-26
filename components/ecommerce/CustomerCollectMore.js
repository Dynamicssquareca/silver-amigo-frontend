import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
SwiperCore.use([Navigation]);



const CustomerCollectMore = () => {



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
            slidesPerView: 5,
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

        <SwiperSlide>
          <div className="customer-box-1">
            <div className="innner-bo">
             <a href="">
             <Image src="/img/dd-pic-1.jpg" alt="dd-pic-1" width={385} height={455} />
              <div className="fll">
                  <span>Gifting</span>
              </div>
             </a>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="customer-box-1">
            <div className="innner-bo">
             <a href="">
             <Image src="/img/dd-pic-1.jpg" alt="dd-pic-1" width={385} height={455} />
              <div className="fll">
                  <span>Gifting</span>
              </div>
             </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-box-1">
            <div className="innner-bo">
             <a href="">
             <Image src="/img/dd-pic-1.jpg" alt="dd-pic-1" width={385} height={455} />
              <div className="fll">
                  <span>Gifting</span>
              </div>
             </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-box-1">
            <div className="innner-bo">
             <a href="">
             <Image src="/img/dd-pic-1.jpg" alt="dd-pic-1" width={385} height={455} />
              <div className="fll">
                  <span>Gifting</span>
              </div>
             </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-box-1">
            <div className="innner-bo">
             <a href="">
             <Image src="/img/dd-pic-1.jpg" alt="dd-pic-1" width={385} height={455} />
              <div className="fll">
                  <span>Gifting</span>
              </div>
             </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-box-1">
            <div className="innner-bo">
             <a href="">
             <Image src="/img/dd-pic-1.jpg" alt="dd-pic-1" width={385} height={455} />
              <div className="fll">
                  <span>Gifting</span>
              </div>
             </a>
            </div>
          </div>
        </SwiperSlide>



      </Swiper>

      {/* <div
                className="slider-arrow"
            >
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                <i className="bi bi-chevron-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                <i className="bi bi-chevron-right"></i>
                </span>
            </div> */}

    </>
  );
};

export default CustomerCollectMore;
