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
      </Swiper>
      <div className="container">
        <h2 className="service-title">{t("Service includes")}</h2>
        <p className="service-text">• {t("Support to get Uzbekistan visa")}</p>
        <p className="service-text">• {t("Hotels with breakfast ")}</p>
        <p className="service-text">
          • {t("All types of transportation, transfer ")}
        </p>
        <p className="service-text">• {t("Meeting at the airport")}</p>
        <p className="service-text">• {t("Local guide as driver")}</p>
        <p className="service-text">
          • {t("City tour and mountain experience ")}
        </p>
        <p className="service-text">
          • {t("Consulting for business travellers")}
        </p>
        <p className="service-text">• {t("Rent car")}</p>
        <p className="service-text">• {t("Rent apartment for longer stays")}</p>
        <p className="service-text">• {t("Train tickets")}</p>
      </div>
    </>
  );
}
