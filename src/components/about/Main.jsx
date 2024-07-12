import React from "react";
import AboutImage from "../../img/about.jpg";
import "./style.css";
import { useTranslation } from "react-i18next";

import OneImage from "../../img/IMG_5525.JPG";
import TwoImage from "../../img/IMG_5526.JPG";
import ThreeImage from "../../img/IMG_5527.JPG";
import FourImage from "../../img/IMG_5531.JPG";
import FiveImage from "../../img/IMG_5533.JPG";
import SixImage from "../../img/IMG_5537.JPG";
import SevenImage from "../../img/IMG_5538.JPG";
import EightImage from "../../img/IMG_5539.JPG";
import NineImage from "../../img/IMG_5540.JPG";
import TenImage from "../../img/IMG_5374.JPG";
import ElevenImage from "../../img/IMG_5524.JPG";
import TwelfImage from "../../img/IMG_5530.JPG";
import ThirsteenImage from "../../img/IMG_5532.JPG";
import FourteenImage from "../../img/IMG_5545.JPG";
import FiveteenImage from "../../img/IMG_5547.JPG";
import SixteenImage from "../../img/IMG_5548.JPG";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <img src={AboutImage} className="about-image" alt="" />
        </div>
        <h3 className="about-title">
          {t("Hello, I'm Samandar Ikromov - Your Travel Companion!")}
        </h3>
        <p className="about-text">{t("text1")}</p>
        <p className="about-text">{t("text2")}</p>
        <p className="about-text">{t("text3")}</p>
        <div className="wrapper mobile-gallery-image">
          <div className="mobile-gallery-list">
            <img className="gallery-image" src={OneImage} alt="" />
            <img className="gallery-image" src={TwoImage} alt="" />
            <img className="gallery-image" src={ThreeImage} alt="" />
            <img className="gallery-image" src={FourImage} alt="" />
            <img className="gallery-image" src={FiveImage} alt="" />
            <img className="gallery-image" src={SixImage} alt="" />
            <img className="gallery-image" src={SevenImage} alt="" />
            <img className="gallery-image" src={EightImage} alt="" />
            <img className="gallery-image" src={NineImage} alt="" />
            <img className="gallery-image" src={TenImage} alt="" />
            <img className="gallery-image" src={ElevenImage} alt="" />
            <img className="gallery-image" src={TwelfImage} alt="" />
            <img className="gallery-image" src={ThirsteenImage} alt="" />
            <img className="gallery-image" src={FourteenImage} alt="" />
            <img className="gallery-image" src={FiveteenImage} alt="" />
            <img className="gallery-image" src={SixteenImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
