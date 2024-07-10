import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper1">
        <SwiperSlide className="swiper-1"></SwiperSlide>
        {/* <SwiperSlide className="swiper-2">
          <h2>{t("take")}</h2>
          <h1>Sharm El-Sheikh</h1>
          <button className="swiper-button">{t("borish")}</button>
        </SwiperSlide>
        <SwiperSlide className="swiper-3">
          <h2>{t("take")}</h2>
          <h1>Istanbul</h1>
          <button className="swiper-button">{t("borish")}</button>
        </SwiperSlide>
        <SwiperSlide className="swiper-4">
          <h2>{t("take")}</h2>
          <h1>Antalya</h1>
          <button className="swiper-button">{t("borish")}</button>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
