"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Slide from "../components/slide";

export default function BigCarousel() {
  return (
    <Swiper
      className="w-full h-full justify-center items-center"
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
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
