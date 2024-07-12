import React, { useState } from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa6";
import Footer from "./footer";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Fade } from "react-reveal";
export default function Contact() {
  const { t } = useTranslation();

  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [textValue, setTextValue] = useState("");

  function changeNumber(item) {
    setNumberValue(item);
  }

  function changeName(item) {
    setNameValue(item);
  }
  function changeText(item) {
    setTextValue(item);
  }

  const handleClear = () => {
    setNameValue(null);
    setNumberValue(null);
    setTextValue(null);
  };

  let bot = {
    TOKEN: "6923751684:AAGXHTr_fJQFkSGQUUGamMzmWrO2Ubd2RjU",
    chatID: "-1002150326339",
    message: `
        Assalomu alaykum sizga yangi xabar!%0A
        %0AIsmi 👤: ${nameValue}; 
        %0ATelefon raqami ☎: ${numberValue};
        %0ASizga xabar ☎: ${textValue};`,
  };

  function sendMessage(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success.status === 200) {
          handleClear();
        }
        window.location.reload();
        toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
      },
      (error) => {}
    );
  }
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
          <Fade bottom>
            <div className="more-reservation">
              <div className="row-reservation">
                <div className="info-item">
                  <i>
                    <MdOutlineLocalPhone style={{ margin: "15px" }} />
                  </i>
                  <h4>{t("phone")}</h4>
                  <p>+998990621736</p>
                </div>
                <div className="info-item">
                  <i>
                    <CgMail style={{ margin: "15px" }} />
                  </i>
                  <h4>{t("email")}</h4>
                  <p>+998990621736</p>
                </div>
                <div className="info-item">
                  <i>
                    <FaLocationArrow style={{ margin: "15px" }} />
                  </i>
                  <h4>{t("office")}</h4>
                  <p>Tashkent</p>
                </div>
              </div>
            </div>
          </Fade>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d196581.27772823905!2d66.9515776!3d39.659110399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719583699981!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "500px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <Fade bottom>
            <div className="connect">
              <h1>{t("joy")}</h1>
              <div className="row-connect">
                <div className="cold">
                  <fieldset>
                    <label htmlFor="">{t("ism")}</label> <br />
                    <input
                      value={nameValue}
                      onChange={(e) => changeName(e.target.value)}
                      type="text"
                    />
                  </fieldset>
                </div>
                <div className="cold">
                  <fieldset>
                    <label htmlFor="">{t("telefon")}</label>
                    <input
                      value={numberValue}
                      onChange={(e) => changeNumber(e.target.value)}
                      type="number"
                    />
                  </fieldset>
                </div>
                <div className="cold-1">
                  <fieldset>
                    <label htmlFor="">{t("Message")}</label>
                    <textarea
                      value={textValue}
                      onChange={(e) => changeText(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <button style={{ cursor: "pointer" }} onClick={sendMessage}>
                {t("making")}
              </button>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
}
