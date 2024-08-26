import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
SwiperCore.use([Navigation]);



const CustomerReview = () => {



  return (
    <>
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
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

        <SwiperSlide>
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <Image src="/img/avatar-1.png" alt="avatar-1" width={80} height={80} />
              <span className="name">Sarah L.</span>
              <div className="star-rate">
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill"></span>
              </div>
              <p>I am absolutely in love with my gold pendant! The craftsmanship is impeccable, and the design is so elegant. It adds a touch of sophistication to every outfit. I’ve received so many compliments.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <Image src="/img/avatar-1.png" alt="avatar-1" width={80} height={80} />
              <span className="name">Sarah L.</span>
              <div className="star-rate">
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill"></span>
              </div>
              <p>I am absolutely in love with my gold pendant! The craftsmanship is impeccable, and the design is so elegant. It adds a touch of sophistication to every outfit. I’ve received so many compliments. It’s truly a timeless piece that I will cherish forever.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <Image src="/img/avatar-1.png" alt="avatar-1" width={80} height={80} />
              <span className="name">Sarah L.</span>
              <div className="star-rate">
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill"></span>
              </div>
              <p>I gifted my wife one of these gold pendants for our anniversary, and she was over the moon! The quality and attention to detail are outstanding. It’s a beautiful piece that perfectly captures her style. She wears it every day, and it looks stunning with everything.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <Image src="/img/avatar-1.png" alt="avatar-1" width={80} height={80} />
              <span className="name">Sarah L.</span>
              <div className="star-rate">
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill"></span>
              </div>
              <p>I gifted my wife one of these gold pendants for our anniversary, and she was over the moon! The quality and attention to detail are outstanding. It’s a beautiful piece that perfectly captures her style. She wears it every day, and it looks stunning with everything.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <Image src="/img/avatar-1.png" alt="avatar-1" width={80} height={80} />
              <span className="name">Sarah L.</span>
              <div className="star-rate">
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill"></span>
              </div>
              <p>I am absolutely in love with my gold pendant! The craftsmanship is impeccable, and the design is so elegant. It adds a touch of sophistication to every outfit. I’ve received so many compliments. It’s truly a timeless piece that I will cherish forever.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="customer-review-box d-flex">
            <div className="innner-bo">
              <Image src="/img/avatar-1.png" alt="avatar-1" width={80} height={80} />
              <span className="name">Sarah L.</span>
              <div className="star-rate">
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill checked"></span>
                <span className="bi bi-star-fill"></span>
              </div>
              <p>I gifted my wife one of these gold pendants for our anniversary, and she was over the moon! The quality and attention to detail are outstanding. It’s a beautiful piece that perfectly captures her style. She wears it every day, and it looks stunning with everything.</p>
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

export default CustomerReview;
