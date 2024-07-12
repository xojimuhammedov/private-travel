import React from "react";
import Header from "../header";
import Swiper from "../swiper/swiper";
import Main from "../main";
import Section from "../section";
import Contact from "../contact";
import Mobile from "./mobile/index";
import Statistic from "../Statistic";
export default function index() {
  return (
    <div className="home">
      <Mobile />
      <Header />
      <Swiper />
      <Main />
      <Section />
      <Statistic />
      <Contact />
    </div>
  );
}
