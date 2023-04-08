import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Carousel = ({ slides, settings, ...rest }) => {
  return (
    <Swiper
      spaceBetween={80}
      // centeredSlides={true}
      // centeredSlidesBounds={true}

      className="mySwiper"
      pagination={{ dynamicBullets: true, clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          pagination: {
            enabled: true,
          },
          spaceBetween: 10,
          modules: [Pagination],
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          pagination: {
            enabled: true,
          },
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
          pagination: {
            enabled: true,
          },
        },
      }}
      modules={[Pagination]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
