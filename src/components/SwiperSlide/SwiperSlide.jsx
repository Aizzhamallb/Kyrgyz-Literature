import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../styles/index.css";

const Carousel = () => {
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
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            width="100%"
            className="slider"
            src="https://gdb.rferl.org/393F9E64-575F-4F30-95F9-9590DFF18297_w1080_h608_s.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider"
            width="100%"
            src="https://gdb.rferl.org/896FE14F-D3ED-43AE-868D-8C83C31D8623_w1080_h608_s.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slider"
            width="100%"
            src="https://www.ktrk.kg/img/thumbnail/93291481535122_big.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
