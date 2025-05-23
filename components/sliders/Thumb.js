import { useState } from "react";
import Image from "next/image";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ imageOne, imageTwo, productName }) => {
    console.log(imageOne);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}

                spaceBetween={10}
                navigation={true}
                  {...(thumbsSwiper ? { thumbs: { swiper: thumbsSwiper } } : {})}
                modules={[FreeMode, Navigation, Thumbs]}

                className="mySwiper2 bordr-slide"
            >

                <SwiperSlide>
                    <img
                        src={imageOne}
                        alt={productName}
                        width={504}
                        height={504}
                    />

                </SwiperSlide>
                {imageTwo.length >= 0 && (
                    <SwiperSlide>
                        <img
                            src={imageTwo}
                            alt={productName}
                            width={504}
                            height={504}
                        />

                    </SwiperSlide>
                )}

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper thum-pic"
                modules={[FreeMode, Navigation, Thumbs]}
            >

                <SwiperSlide>
                    <img src={imageOne} alt="img" />
                </SwiperSlide>
                {imageTwo.length >= 0 && (
                    <SwiperSlide>
                        <img src={imageTwo} alt="img" />
                    </SwiperSlide>
                )}


            </Swiper>
        </div>
    );
};

export default ThumbSlider;
