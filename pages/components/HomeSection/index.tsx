import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import { SliderContainer } from "./styles";

SwiperCore.use([Pagination]);

export const HomeSection = () => {
  return (
    <SliderContainer>
      <Swiper pagination={true} className="swipeContainer">
        <SwiperSlide className="swiperSlide">
          <img src="/slide1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src="/slide2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <img src="/slide3.jpg" />
        </SwiperSlide>
      </Swiper>
    </SliderContainer>
  );
};
