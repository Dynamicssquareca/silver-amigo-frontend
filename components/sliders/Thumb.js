import { useState, useRef, useEffect } from "react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ThumbSlider = ({ imageOne, imageTwo, productName }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const zoomContainerRefs = [useRef(null), useRef(null)];
  const zoomImgRefs = [useRef(null), useRef(null)];

  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  const [thumbsReady, setThumbsReady] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    if (
      mainSwiperRef.current &&
      thumbsSwiperRef.current &&
      !thumbsSwiperRef.current.destroyed
    ) {
      mainSwiperRef.current.thumbs.swiper = thumbsSwiperRef.current;
      mainSwiperRef.current.thumbs.init();
      mainSwiperRef.current.thumbs.update();
      setThumbsReady(true);
    }
  }, []);

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
      zoomImgRefs[activeIndex].current.style.transform = "scale(2)";
    }
  };

  const handleMouseLeave = () => {
    if (zoomImgRefs[activeIndex]?.current) {
      zoomImgRefs[activeIndex].current.style.transform = "scale(1)";
    }
  };

  const images = [imageOne, imageTwo].filter((img) => img?.trim());

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsReady ? thumbsSwiperRef.current : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              ref={zoomContainerRefs[index]}
              className="position-relative overflow-hidden"
              style={{ width: "504px", height: "504px" }}
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
        ))}
      </Swiper>

      <Swiper
        onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress
        freeMode
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Thumbnail ${index + 1}`} className="img-fluid" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbSlider;
