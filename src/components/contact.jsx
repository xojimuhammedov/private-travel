import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa6";
import Footer from "./footer";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className="Contact">
        <div className="container">
          <div className="contact">
            <div className="contact-text">
              <p>{t("choose_p")}</p>
              <hr />
              <h1>{t("choose")}</h1>
              <a href="/" className="button">
                {t("taxlil")}
              </a>
            </div>
          </div>
          <div className="more-reservation">
            <div className="row-reservation">
              <div className="info-item">
                <i>
                  <MdOutlineLocalPhone />
                </i>
                <h4>{t("phone")}</h4>
                <p>+998990621736</p>
              </div>
              <div className="info-item">
                <i>
                  <CgMail />
                </i>
                <h4>{t("email")}</h4>
                <p>+998990621736</p>
              </div>
              <div className="info-item">
                <i>
                  <FaLocationArrow />
                </i>
                <h4>{t("office")}</h4>
                <p>Tashkent</p>
              </div>
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196581.27772823905!2d66.9515776!3d39.659110399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719583699981!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "500px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="connect">
            <h1>{t("joy")}</h1>
            <div className="row-connect">
              <div className="cold">
                <fieldset>
                  <label htmlFor="">{t("ism")}</label> <br />
                  <input type="text" />
                </fieldset>
              </div>
              <div className="cold">
                <fieldset>
                  <label htmlFor="">{t("telefon")}</label>
                  <input type="text" />
                </fieldset>
              </div>
              <div className="cold">
                <fieldset>
                  <label htmlFor="">{t("savol_kiwi")}</label>
                  <select name="" id="">
                    <option value="">ex. 3 or 2 or 5</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </fieldset>
              </div>
              <div className="cold">
                <fieldset>
                  <label htmlFor="">{t("flight_date")} </label>
                  <input
                    type="date"
                    id="nameData"
                    name="date"
                    class="date"
                    required=""
                  ></input>
                </fieldset>
              </div>
              <div className="cold-1">
                <fieldset>
                  <label for="chooseDestination" class="form-label">
                    {t("destination")}
                  </label>
                  <select
                    name="Destination"
                    class="form-select"
                    aria-label="Default select example"
                    id="chooseCategory"
                    onchange="this.form.click()"
                  >
                    <option selected="">Antalya</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Kanada">Canada</option>
                    <option value="England">England</option>
                  </select>
                </fieldset>
              </div>
              <div className="cold-1">
                <fieldset>
                  <label for="chooseDestination" className="form-label">
                    {t("choose_visa")}
                  </label>
                  <select
                    name="Destination"
                    class="form-select"
                    aria-label="Default select example"
                    id="chooseCategory"
                    onchange="this.form.click()"
                  >
                    <option selected="">Antalya</option>
                    <option value="Istanbul">Istanbul</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Sharm El-Sheikh">Sharm El-Sheikh</option>
                    <option value="Kuala Lumpur">Kuala Lumpur</option>
                    <option value="Kanada">Canada</option>
                    <option value="England">England</option>
                  </select>
                </fieldset>
              </div>
            </div>
            <button>{t("making")}</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
