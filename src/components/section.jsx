import React from "react";
import { useTranslation } from "react-i18next";
import Tashkent from "../img/tashkent.jpg";
import Samarkand from "../img/samarkand.jpg";
import Bukhara from "../img/bukhara.JPG";
import Khiva from "../img/IMG_5540.JPG";
import Qoraqalpoq from "../img/IMG_5526.JPG";

import { Link } from "react-router-dom";

export default function Section() {
  const { t } = useTranslation();
  return (
    <div className="Section">
      <div className="container">
        <div className="section-cards">
          <h1 className="section-h1">{t("city")}</h1>
          <p className="section-v">{t("city_p")}</p>
          <div className="section-cards-items">
            <img className="section-img" src={Tashkent} alt="Visit-Tashkent" />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Tashkent City Tour</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("dubai_p")}</p>
              <div className="content-button">
                <Link className="content-link" to={"/more-tashkent"}>
                  {t("know")}
                </Link>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img
              className="section-img"
              src={Samarkand}
              alt="Visit-Samarkand"
            />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Day Tour to Samarkand</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("sam_p")}</p>
              <div className="content-button">
                <Link className="content-link" to={"/more-samarkand"}>
                  {t("know")}
                </Link>
              </div>
            </div>
          </div>
          <div className="section-cards-items">
            <img className="section-img" src={Bukhara} alt="Visit-Samarkand" />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Day Tour to Bukhara</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("bukhara_p")}</p>
              <div className="content-button">
                <Link className="content-link" to={"/more-bukhara"}>
                  {t("know")}
                </Link>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img src={Khiva} alt="Visit Dubai" className="section-img" />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Khiva / Urgench</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("khiva_p")}</p>
              <div className="content-button">
                <Link className="content-link" to={"/more-khiva"}>
                  {t("know")}
                </Link>
              </div>
            </div>
          </div>

          <div className="section-cards-items">
            <img src={Qoraqalpoq} alt="Visit Dubai" className="section-img" />
            <div className="content-right">
              <div className="content-main">
                <div className="section-text">
                  <h4>Qoraqolpoqiston / Nukus</h4>
                  <span>Uzbekistan</span>
                </div>
              </div>
              <p>{t("q_p")}</p>
              <div className="content-button">
                <Link className="content-link" to={"/more-nukus"}>
                  {t("know")}
                </Link>
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
        </div>
      </div>
    </div>
  );
}
