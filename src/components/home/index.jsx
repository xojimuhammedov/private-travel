import React from "react";
import Header from "../header";
import Swiper from "../swiper/swiper";
import Main from "../main";
import Swip from "../swiper/swip";
import Visa from "../swiper/visa";
import Section from "../section";
import Contact from "../contact";
import Mobile from "./mobile/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function index() {
  return (
    <div className="home">
      <BrowserRouter>
        <Mobile />
        <Header />
        <Swiper />
        <Main />
        <Swip />
        <Visa />
        <Section />
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
