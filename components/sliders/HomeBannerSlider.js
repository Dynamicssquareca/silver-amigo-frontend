import Link from "next/link";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination ,Autoplay, FreeMode } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination,Autoplay, FreeMode]);

const HomeBannerSlider = ({banner}) => {
    return (
        <>
            <Swiper
             autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
                slidesPerView={1}
                spaceBetween={0}
                
                pagination={false}
                navigation={{
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1",
                }}
                className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
            >
                {banner && banner.map((item, i) => (
                <SwiperSlide key={i}>
                    <div className="single-hero-slider single-animation-wrap">
                        <Link href={item.link}>
                        <img
                        src={`${process.env.NEXT_PUBLIC_BACKENDAPI_URL}uploads/sliders/${item.image}`}
                        alt={item.alt_text}
                        width={1600}
                        height={503}
                      />
                     </Link>
                    </div>
                </SwiperSlide>
                 ))}
                  
            </Swiper>
            
            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
                <i className="bi bi-chevron-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i1">
                <i className="bi bi-chevron-right"></i>
                </span>
            </div>
        </>
    );
};


 

export default HomeBannerSlider;
