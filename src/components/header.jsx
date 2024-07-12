import React from "react";
import "./css/main.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import Logo from "../img/Logo";
export default function Header() {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="Header">
      <div className="container">
        <div className="header-top">
          <div className="header-logo">
            <Link className="header-link" to="/">
              <Logo />
            </Link>
          </div>
          <div className="navbar-menu">
            <ul className="nav">
              <li>
                <Link to="/">{t("home")}</Link>
              </li>
              <li>
                <Link to="/about">{t("About_us")}</Link>
              </li>
              <li>
                <Link to="/">{t("Tours")}</Link>
              </li>

              <li>
                <Link to="/">{t("Contacts")}</Link>
              </li>
            </ul>

            <ul className="menu-lang">
              <select
                onChange={(e) => handleChangeLanguage(e.target.value)}
                className="language">
                <option value="uz" to="/">
                  UZ
                </option>

                <option value="en" to="/">
                  ENG
                </option>

                <option value="ru" to="/">
                  RU
                </option>
              </select>

              <li>
                <a
                  target="_blank"
                  className="head-icon"
                  href={"https://wa.link/7ec3x6"}>
                  <i>
                    <IoLogoWhatsapp />
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="head-icon"
                  target="_blank"
                  href={" https://www.facebook.com/samanuz13?mibextid=LQQJ4d"}>
                  <i>
                    <FaFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="head-icon"
                  target="_blank"
                  href={"https://www.instagram.com/samanuz13"}>
                  <i>
                    <RiInstagramFill />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
