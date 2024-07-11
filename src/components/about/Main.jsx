import React from "react";
import AboutImage from "../../img/about.jpg";
import "./style.css";

function Main() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-top">
          <img src={AboutImage} className="about-image" alt="" />
        </div>
        <h3 className="about-title">Greetings from Uzbekistan!</h3>
        <p className="about-text">
          My name is Aziz Khalmuradov. I live in Tashkent, Uzbekistan and work
          as a professional, licensed tour guide across the country.
        </p>
        <p className="about-text">
          I have always been interested in the history, architectural monuments,
          wild nature and varied cultures of my vast an diverse country. This
          has led me on a lifelong journey of exploration that I am eager to
          share with you.
        </p>
        <p className="about-text">
          My customized excursions acquaint visitors with the renowned sights
          along the old Silk Road, as well as with more unique travel routes. I
          conduct tours in English and Russian across all of Uzbekistan. If you
          wish, I can supply my own transport (sedan and van), which saves the
          expense of hiring a driver and car.
        </p>
        <p className="about-text">
          With more than 20 year of experience in the tour business, I can
          tackle any and all logistics connected with organizing your travels in
          Uzbekistan.
        </p>
      </div>
    </div>
  );
}

export default Main;
