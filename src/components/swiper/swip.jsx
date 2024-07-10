import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosPeople } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FaTaxi } from "react-icons/fa";
import "./styles.css";
import { IoIosAirplane } from "react-icons/io";
import { FaRegBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="main-intro">
        <h1>{t("best")}</h1>
        <p>{t("discover")}</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper2"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 3,
          },
          // 800: {
          //   slidesPerView: 1,
          // },
        }}
      >
        <SwiperSlide>
          <div className="img-first">
            <div className="img-decoration">
              <div className="img-decorate">
                <img
                  src="https://zamontour.uz/assets/images/deals-02.jpg"
                  alt=""
                />
              </div>
              <div className="weekly-tour">
                <div className="text">
                  <h2>
                    England <br />{" "}
                    <span>
                      {" "}
                      <i>
                        {" "}
                        <IoIosPeople />
                      </i>
                      {t("order")}
                    </span>
                  </h2>
                  <span> {t("kishi")}</span>
                  <hr />
                  <h4>Deal includes :</h4>
                  <p>
                    {" "}
                    <b>
                      <FaTaxi />
                    </b>{" "}
                    {t("sayohat")}
                  </p>
                  <p>
                    <b>
                      <IoIosAirplane />
                    </b>{" "}
                    {t("bilet")}
                  </p>
                  <p>
                    {" "}
                    <b>
                      <FaRegBuilding />
                    </b>{" "}
                    {t("locations")}
                  </p>
                  <Link to="/">{t("joyuchun")}</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-first">
            <div className="img-decoration">
              <div className="img-decorate">
                <img
                  src="https://zamontour.uz/assets/images/deals-02.jpg"
                  alt=""
                />
              </div>
              <div className="weekly-tour">
                <div className="text">
                  <h2>
                    England <br />{" "}
                    <span>
                      {" "}
                      <i>
                        {" "}
                        <IoIosPeople />
                      </i>
                      {t("order")}
                    </span>
                  </h2>
                  <span> {t("kishi")}</span>
                  <hr />
                  <h4>Deal includes :</h4>
                  <p>
                    {" "}
                    <b>
                      <FaTaxi />
                    </b>{" "}
                    {t("sayohat")}
                  </p>
                  <p>
                    <b>
                      <IoIosAirplane />
                    </b>{" "}
                    {t("bilet")}
                  </p>
                  <p>
                    {" "}
                    <b>
                      <FaRegBuilding />
                    </b>{" "}
                    {t("locations")}
                  </p>
                  <Link to="/">{t("joyuchun")}</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-first">
            <div className="img-decoration">
              <div className="img-decorate">
                <img
                  src="https://zamontour.uz/assets/images/deals-02.jpg"
                  alt=""
                />
              </div>
              <div className="weekly-tour">
                <div className="text">
                  <h2>
                    England <br />{" "}
                    <span>
                      {" "}
                      <i>
                        {" "}
                        <IoIosPeople />
                      </i>
                      {t("order")}
                    </span>
                  </h2>
                  <span> {t("kishi")}</span>
                  <hr />
                  <h4>Deal includes :</h4>
                  <p>
                    {" "}
                    <b>
                      <FaTaxi />
                    </b>{" "}
                    {t("sayohat")}
                  </p>
                  <p>
                    <b>
                      <IoIosAirplane />
                    </b>{" "}
                    {t("bilet")}
                  </p>
                  <p>
                    {" "}
                    <b>
                      <FaRegBuilding />
                    </b>{" "}
                    {t("locations")}
                  </p>
                  <Link to="/">{t("joyuchun")}</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-first">
            <div className="img-decoration">
              <div className="img-decorate">
                <img
                  src="https://zamontour.uz/assets/images/deals-02.jpg"
                  alt=""
                />
              </div>
              <div className="weekly-tour">
                <div className="text">
                  <h2>
                    England <br />{" "}
                    <span>
                      {" "}
                      <i>
                        {" "}
                        <IoIosPeople />
                      </i>
                      {t("order")}
                    </span>
                  </h2>
                  <span> {t("kishi")}</span>
                  <hr />
                  <h4>Deal includes :</h4>
                  <p>
                    {" "}
                    <b>
                      <FaTaxi />
                    </b>{" "}
                    {t("sayohat")}
                  </p>
                  <p>
                    <b>
                      <IoIosAirplane />
                    </b>{" "}
                    {t("bilet")}
                  </p>
                  <p>
                    {" "}
                    <b>
                      <FaRegBuilding />
                    </b>{" "}
                    {t("locations")}
                  </p>
                  <Link to="/">{t("joyuchun")}</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-first">
            <div className="img-decoration">
              <div className="img-decorate">
                <img
                  src="https://zamontour.uz/assets/images/deals-02.jpg"
                  alt=""
                />
              </div>
              <div className="weekly-tour">
                <div className="text">
                  <h2>
                    England <br />{" "}
                    <span>
                      {" "}
                      <i>
                        {" "}
                        <IoIosPeople />
                      </i>
                      {t("order")}
                    </span>
                  </h2>
                  <span> {t("kishi")}</span>
                  <hr />
                  <h4>Deal includes :</h4>
                  <p>
                    {" "}
                    <b>
                      <FaTaxi />
                    </b>{" "}
                    {t("sayohat")}
                  </p>
                  <p>
                    <b>
                      <IoIosAirplane />
                    </b>{" "}
                    {t("bilet")}
                  </p>
                  <p>
                    {" "}
                    <b>
                      <FaRegBuilding />
                    </b>{" "}
                    {t("locations")}
                  </p>
                  <Link to="/">{t("joyuchun")}</Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
