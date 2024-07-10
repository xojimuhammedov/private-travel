import React from "react";
import { IoMdPerson } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaHouse } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Tashkent from "../img/tashkent.jpg";
import Samarkand from "../img/samarkand.jpg";
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
                <div className="content-button">
                  <button>{t("know")}</button>
                </div>
              </div>
              <p>{t("temir_p")}</p>
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
                <div className="content-button">
                  <button>{t("know")}</button>
                </div>
              </div>
              <p>{t("avia_p")}</p>
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
                <div className="content-button">
                  <button>{t("know")}</button>
                </div>
              </div>
              <p>{t("dubai_p")}</p>

              <div className="new-section-item">
                <p>
                  <i>
                    <IoMdPerson />
                  </i>
                  {t("odam")}
                </p>
                <p>
                  <i>
                    <TbWorld />
                  </i>
                  334.8 km²
                </p>
                <p>
                  <i>
                    <FaHouse />
                  </i>
                  $150.000
                </p>
              </div>

              <button className="cta">
                <span className="hover-underline-animation">{t("qiziq")}</span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
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
                <div className="content-button">
                  <button>{t("know")}</button>
                </div>
              </div>
              <p>{t("sam_p")}</p>

              <div className="new-section-item">
                <p>
                  <i>
                    <IoMdPerson />
                  </i>
                  {t("sam_odam")}
                </p>
                <p>
                  <i>
                    <TbWorld />
                  </i>
                  120.000 km²
                </p>
                <p>
                  <i>
                    <FaHouse />
                  </i>
                  $250.000
                </p>
              </div>

              <button className="cta">
                <span className="hover-underline-animation">{t("qiziq")}</span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
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
                <div className="content-button">
                  <button>{t("know")}</button>
                </div>
              </div>
              <p>{t("khiva_p")}</p>

              <div className="new-section-item">
                <p>
                  <i>
                    <IoMdPerson />
                  </i>
                  {t("khiva_odam")}
                </p>
                <p>
                  <i>
                    <TbWorld />
                  </i>
                  6.05 km²
                </p>
                <p>
                  <i>
                    <FaHouse />
                  </i>
                  $100{" "}
                </p>
              </div>

              <button className="cta">
                <span className="hover-underline-animation">{t("qiziq")}</span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
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
                <div className="content-button">
                  <button>{t("know")}</button>
                </div>
              </div>
              <p>{t("q_p")}</p>

              <div className="new-section-item">
                <p>
                  <i>
                    <IoMdPerson />
                  </i>
                  {t("q_odam")}
                </p>
                <p>
                  <i>
                    <TbWorld />
                  </i>
                  166.6 km²
                </p>
                <p>
                  <i>
                    <FaHouse />
                  </i>
                  $320.000
                </p>
              </div>

              <button className="cta">
                <span className="hover-underline-animation">{t("qiziq")}</span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="locations">
          <h1>{t("locations")}</h1>
          <p>{t("discover")}</p>
          <div className="wrapper">
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
