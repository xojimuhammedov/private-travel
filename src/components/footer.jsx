import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="footer-row">
            <div className="col-lg-8">
              <h2>{t("looking")}</h2>
              <h4>{t("connect")}</h4>
            </div>
            <div class="col-lg-9">
              <div class="border-button">
                <a href="tel:+998990621736">{t("Contacts")}</a>
              </div>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <a
                target="_blank"
                className="head-icon"
                href={"https://wa.link/7ec3x6"}>
                <i>
                  <IoLogoWhatsapp fontSize={"30px"} />
                </i>
              </a>
            </li>
            <li>
              <a
                className="head-icon"
                target="_blank"
                href={" https://www.facebook.com/samanuz13?mibextid=LQQJ4d"}>
                <i>
                  <FaFacebook fontSize={"30px"} />
                </i>
              </a>
            </li>
            <li>
              <a
                className="head-icon"
                target="_blank"
                href={"https://www.instagram.com/samanuz13"}>
                <i>
                  <RiInstagramFill fontSize={"30px"} />
                </i>
              </a>
            </li>
          </ul>
          <ul className="footer-bottom-list">
            <li>
              <a href="tel:+998990621736">+998 99 062 17 36</a>
            </li>
            <li>
              <a href="mailto:samandarwtf.13@gmail.com">
                samandarwtf.13@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot-end">
        <div className="container">
          <div className="end-row">
            <div class="col-lg-12">
              <p>
                Copyright © 2024 <a href="/">Samandar Travel Tour.</a> All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
