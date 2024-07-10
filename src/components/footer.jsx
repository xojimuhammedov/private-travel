import React from "react";
import { useTranslation } from "react-i18next";

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
                <a href="#contact">{t("connecting")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="foot-end">
        <div className="container">
          <div className="end-row">
            <div class="col-lg-12">
              <p>
                Copyright © 2024 <a href="/">Zamon Business Tour.</a> All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
