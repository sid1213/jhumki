"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import SwiperSlideCustom from "./SwiperSlideCustom";
import { SwiperComponentProps } from "@/app/types/types";
import { SwiperModule } from "swiper/types";

const SwiperComponent: React.FC<SwiperComponentProps> = ({
  swiperSlideData,
  navigation = false,
  autoplay = false,
  loop = false,
  slidesPerView = 1,
  spaceBetween = 0,
  freeMode = false,
  modules = [Navigation, Autoplay, FreeMode],
}) => {
  const swiperOptions = {
    navigation: navigation,
    loop: loop,
    autoplay: autoplay ? { delay: 2500, disableOnInteraction: false } : false,
    slidesPerView: slidesPerView,
    spaceBetween: spaceBetween,
    freeMode: freeMode,
    modules: modules as SwiperModule[],
  };

  return (
    <>
      <Swiper {...swiperOptions} className="mySwiper">
        {swiperSlideData.images.map((data, index) => {
          console.log(data);
          return (
            <SwiperSlide key={index}>
              <SwiperSlideCustom
                alt={`${swiperSlideData.alt + index}`}
                height={swiperSlideData.height}
                width={swiperSlideData.width}
                images={[data]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperComponent;
