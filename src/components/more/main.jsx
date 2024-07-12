import React from "react";
import Header from "../header";
import Mobile from "../../components/home/mobile/index";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Mobile />
      <Header />
      <div className="More-component">
        <div className="container">
          <div className="more-center">
            <h1>Samandar Ikromov: private guiding in Uzbekistan</h1>
            <h3>
              Customized tours and business trip logistics across Uzbekistan
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
