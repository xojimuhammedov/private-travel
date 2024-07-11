import React from "react";
import AboutImage from "../../img/about.jpg";
import "./style.css";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <img src={AboutImage} className="about-image" alt="" />
        </div>
        <h3 className="about-title">{t("Greetings from Uzbekistan!")}</h3>
        <p className="about-text">{t("text1")}</p>
        <p className="about-text">{t("text2")}</p>
        <p className="about-text">{t("text3")}</p>
        <p className="about-text">{t("text4")}</p>
      </div>
    </div>
  );
}

export default Main;
