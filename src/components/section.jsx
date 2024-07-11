import React from "react";
import { IoMdPerson } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaHouse } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Tashkent from "../img/tashkent.jpg";
import Samarkand from "../img/samarkand.jpg";

import OneImage from "../img/IMG_5525.JPG";
import TwoImage from "../img/IMG_5526.JPG";
import ThreeImage from "../img/IMG_5527.JPG";
import FourImage from "../img/IMG_5531.JPG";
import FiveImage from "../img/IMG_5533.JPG";
import SixImage from "../img/IMG_5537.JPG";
import SevenImage from "../img/IMG_5538.JPG";
import EightImage from "../img/IMG_5539.JPG";
import NineImage from "../img/IMG_5540.JPG";
import TenImage from "../img/IMG_5374.JPG";
import ElevenImage from "../img/IMG_5524.JPG";
import TwelfImage from "../img/IMG_5530.JPG";
import ThirsteenImage from "../img/IMG_5532.JPG";
import FourteenImage from "../img/IMG_5545.JPG";
import FiveteenImage from "../img/IMG_5547.JPG";
import SixteenImage from "../img/IMG_5548.JPG";

export default function Section() {
  const { t } = useTranslation();
  return (
    <div className="Section">
      <div className="container">
        <h1>{t("tickets")}</h1>
        <p className="section-p">{t("way")}</p>
        <div className="section-cards">
          <div className="section-cards-items">
            <img
              src="https://zamontour.uz/assets/images/afr.jpg"
              alt="Railway adventure"
            />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>{t("cheap")}</h4>
                  <span>{t("world")}</span>
                </div>
              </div>
              <p>{t("temir_p")}</p>
              <div className="content-button">
                <button>{t("know")}</button>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img
              src="https://zamontour.uz/assets/images/airplane.jpg"
              alt="Airplane adventure"
            />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>{t("avia")}</h4>
                  <span>{t("world")}</span>
                </div>
              </div>
              <p>{t("avia_p")}</p>
              <div className="content-button">
                <button>{t("know")}</button>
              </div>
            </div>
          </div>

          <h1 className="section-h1">{t("city")}</h1>
          <p className="section-v">{t("city_p")}</p>
          <div className="section-cards-items">
            <img src={Tashkent} alt="Visit-Tashkent" />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Tashkent City Tour</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("dubai_p")}</p>
              <div className="content-button">
                <button>{t("know")}</button>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img src={Samarkand} alt="Visit-Samarkand" />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Day Tour to Samarkand</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("sam_p")}</p>
              <div className="content-button">
                <button>{t("know")}</button>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img
              src="https://azizguide.com/thumb/2/G3baSABItdZCqtUSIJsQrA/301c280/d/khiva_islam_khodja_minaret.jpg"
              alt="Visit Dubai"
            />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Khiva / Urgench</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("khiva_p")}</p>
              <div className="content-button">
                <button>{t("know")}</button>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img
              src="https://azizguide.com/thumb/2/X2wPlcWoX_Q0SZhqIBtgrQ/301c280/d/20160703_154743.jpg"
              alt="Visit Dubai"
            />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Qoraqolpoqiston / Nukus</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("q_p")}</p>
              <div className="content-button">
                <button>{t("know")}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="locations">
          <h1>{t("locations")}</h1>
          <p>{t("discover")}</p>
          <div className="wrapper mobile-gallery">
            <div className="containerr">
              <input type="radio" name="slide" id="c1" defaultChecked />
              <label htmlFor="c1" className="card1 card">
                <div className="row1">
                  <div className="icon">1</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>

              <input type="radio" name="slide" id="c2" />
              <label htmlFor="c2" className="card1">
                <div className="row1">
                  <div className="icon">2</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c3" />
              <label htmlFor="c3" className="card1 carddl">
                <div className="row1">
                  <div className="icon">3</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c4" />
              <label htmlFor="c4" className="card1">
                <div className="row1">
                  <div className="icon">4</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c5" />
              <label htmlFor="c5" className="card1">
                <div className="row1">
                  <div className="icon">5</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c6" />
              <label htmlFor="c6" className="card1">
                <div className="row1">
                  <div className="icon">6</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c7" />
              <label htmlFor="c7" className="card1">
                <div className="row1">
                  <div className="icon">7</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c8" />
              <label htmlFor="c8" className="card1">
                <div className="row1">
                  <div className="icon">8</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c9" />
              <label htmlFor="c9" className="card1">
                <div className="row1">
                  <div className="icon">9</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
              <input type="radio" name="slide" id="c10" />
              <label htmlFor="c10" className="card1">
                <div className="row1">
                  <div className="icon">10</div>
                  <div className="description">
                    <h4>Uzbekistan</h4>
                  </div>
                </div>
              </label>
            </div>
          </div>
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
    </div>
  );
}
