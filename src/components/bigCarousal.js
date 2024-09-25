"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Slide from "../components/slide";

import placeholder from "../images/placeholder.jpeg";

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
      // style={SWIPER - NAVIGATION - COLOR}
    >
      <SwiperSlide>
        <Slide title={"About us"} url="/about" image={placeholder} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title={"Events"} url="/events" image={placeholder} />
      </SwiperSlide>
      <SwiperSlide>
        <Slide title={"Programs"} url="/programs" image={placeholder} />
      </SwiperSlide>
    </Swiper>
  );
}
