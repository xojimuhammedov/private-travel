import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosPeople } from "react-icons/io";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { IoMdTime } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";
import "./styles.css";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <div className="main-intro">
        <h1>{t("visa")}</h1>
        <p>{t("boglanish")}</p>
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
        className="Visa-main"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="container">
          <SwiperSlide>
            <div className="img-first">
              <div className="img-decoration">
                <div className="img-decorate">
                  <img
                    src="https://zamontour.uz/assets/images/india.jpg"
                    alt=""
                  />
                </div>
                <div className="weekly-tour">
                  <div className="text">
                    <h2>
                      England <br />
                      <span>
                        <i>
                          <IoIosPeople />
                        </i>
                        {t("register")}
                      </span>
                    </h2>

                    <hr />
                    <h4>{t("xizmat")}</h4>
                    <p>
                      <b>
                        <IoMdPricetags />
                      </b>
                      {t("price")}
                    </p>
                    <p>
                      <b>
                        <IoMdTime />
                      </b>
                      {t("time")}
                    </p>
                    <p>
                      <b>
                        <FaCheck />
                      </b>
                      {t("help")}
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
                    src="https://zamontour.uz/assets/images/japan.jpg"
                    alt=""
                  />
                </div>
                <div className="weekly-tour">
                  <div className="text">
                    <h2>
                      England <br />
                      <span>
                        <i>
                          <IoIosPeople />
                        </i>
                        {t("register")}
                      </span>
                    </h2>

                    <hr />
                    <h4>{t("xizmat")}</h4>
                    <p>
                      <b>
                        <IoMdPricetags />
                      </b>
                      {t("price")}
                    </p>
                    <p>
                      <b>
                        <IoMdTime />
                      </b>
                      {t("time")}
                    </p>
                    <p>
                      <b>
                        <FaCheck />
                      </b>
                      {t("help")}
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
                    src="https://zamontour.uz/assets/images/japan.jpg"
                    alt=""
                  />
                </div>
                <div className="weekly-tour">
                  <div className="text">
                    <h2>
                      England <br />
                      <span>
                        <i>
                          <IoIosPeople />
                        </i>
                        {t("register")}
                      </span>
                    </h2>

                    <hr />
                    <h4>{t("xizmat")}</h4>
                    <p>
                      <b>
                        <IoMdPricetags />
                      </b>
                      {t("price")}
                    </p>
                    <p>
                      <b>
                        <IoMdTime />
                      </b>
                      {t("time")}
                    </p>
                    <p>
                      <b>
                        <FaCheck />
                      </b>
                      {t("help")}
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
                    src="https://zamontour.uz/assets/images/japan.jpg"
                    alt=""
                  />
                </div>
                <div className="weekly-tour">
                  <div className="text">
                    <h2>
                      England <br />
                      <span>
                        <i>
                          <IoIosPeople />
                        </i>
                        {t("register")}
                      </span>
                    </h2>

                    <hr />
                    <h4>{t("xizmat")}</h4>
                    <p>
                      <b>
                        <IoMdPricetags />
                      </b>
                      {t("price")}
                    </p>
                    <p>
                      <b>
                        <IoMdTime />
                      </b>
                      {t("time")}
                    </p>
                    <p>
                      <b>
                        <FaCheck />
                      </b>
                      {t("help")}
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
                    src="https://zamontour.uz/assets/images/japan.jpg"
                    alt=""
                  />
                </div>
                <div className="weekly-tour">
                  <div className="text">
                    <h2>
                      England <br />
                      <span>
                        <i>
                          <IoIosPeople />
                        </i>
                        {t("register")}
                      </span>
                    </h2>

                    <hr />
                    <h4>{t("xizmat")}</h4>
                    <p>
                      <b>
                        <IoMdPricetags />
                      </b>
                      {t("price")}
                    </p>
                    <p>
                      <b>
                        <IoMdTime />
                      </b>
                      {t("time")}
                    </p>
                    <p>
                      <b>
                        <FaCheck />
                      </b>
                      {t("help")}
                    </p>
                    <Link to="/">{t("joyuchun")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
