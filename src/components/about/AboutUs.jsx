import React from "react";
import Header from "../header";
import Contact from "../contact";
import Main from "./Main";
import TransitionsModal from "../home/mobile";

function AboutUs() {
  return (
    <>
      <Header />
      <TransitionsModal />
      <Main />
      <Contact />
    </>
  );
}

export default AboutUs;
