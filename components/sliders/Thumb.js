import { useState, useRef } from "react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ imageOne, imageTwo, productName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const zoomContainerRefs = [useRef(null), useRef(null)];
  const zoomImgRefs = [useRef(null), useRef(null)];

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const handleMouseMove = (e) => {
    if (!isDesktop) return;
    const container = zoomContainerRefs[activeIndex]?.current;
    const img = zoomImgRefs[activeIndex]?.current;
    if (!container || !img) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
  };

  const handleMouseEnter = () => {
    if (isDesktop && zoomImgRefs[activeIndex]?.current) {
      zoomImgRefs[activeIndex].current.style.transform = "scale(1.5)";
    }
  };

  const handleMouseLeave = () => {
    if (zoomImgRefs[activeIndex]?.current) {
      zoomImgRefs[activeIndex].current.style.transform = "scale(1)";
    }
  };

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        {...(thumbsSwiper ? { thumbs: { swiper: thumbsSwiper } } : {})}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 bordr-slide"
      >
        {[imageOne, imageTwo].map(
          (image, index) =>
            image && (
              <SwiperSlide key={index}>
                <div
                  className="position-relative overflow-hidden"
                  style={{ width: "504px", height: "504px" }}
                  ref={zoomContainerRefs[index]}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    ref={zoomImgRefs[index]}
                    src={image}
                    alt={productName}
                    width={504}
                    height={504}
                    className="img-fluid"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                </div>
              </SwiperSlide>
            )
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
          <img src={imageOne} alt="img" className="img-fluid" />
        </SwiperSlide>
        {imageTwo && (
          <SwiperSlide>
            <img src={imageTwo} alt="img" className="img-fluid" />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
