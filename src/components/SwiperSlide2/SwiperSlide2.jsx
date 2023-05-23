import React from "react";
import { useNavigate } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>
          <img
            onClick={() => navigate("/products")}
            width="100%"
            src="./media/64fde23ecbfde55c51d94f4e43bdc843.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => navigate("/products")}
            width="50%"
            height="50%"
            src="../SwiperSlide2/media/64fde23ecbfde55c51d94f4e43bdc843.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel2;
