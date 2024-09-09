"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//
// Import Swiper styles
import "swiper/css";

import Slide from "../components/slide";

export default function BigCarousel() {
  return (
    <Swiper
      className="w-full h-full justify-center items-center"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slide
          title={"Korean American Otolargyngology Society"}
          caption="Info about KAOS"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title={"Events"} caption="Info about events" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title={"Programs"} caption="Info about programs" />
      </SwiperSlide>
    </Swiper>
  );
}
