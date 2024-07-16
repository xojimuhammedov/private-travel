import React from "react";
import Footer from "../footer";

import Main from "./main";
import "./style.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Main />
      <div className="container">
        <div className="more-comp-bottom">
          <div className="more-comp-right">
            <h1>Tashkent city Tour</h1>
            <div className="zomin-list">
              <img
                src="https://www.advantour.com/img/uzbekistan/tours/city-tour-tashkent/barak-khan-madrasah.jpg"
                alt=""
              />
              <img
                src="https://www.advantour.com/img/uzbekistan/tours/city-tour-tashkent/tilly-sheikh-mosque.jpg"
                alt=""
              />
            </div>
            <div className="more-travel-about">
              <p>
                Tashkent is the capital of Uzbekistan and one of the largest
                city in Central Asia (fourth largest international city in the
                post-Soviet Union). It has existed for more than 2200 years. Its
                architectural monuments are not so known as ones of Samarkand,
                Bukhara, Khiva, but geographical location and the rough history
                of the city connected to its position predetermined the special
                color of Tashkent, which has been the main center of political,
                economic and cultural life of the whole region for more than 150
                years.
              </p>{" "}
              <br />
              <p>
                I will show you architectural monuments and bazaar of Tashkent -
                from the birth of the city to our days. You will got opportunity
                to see many-faced Tashkent.
              </p>
              <p>
                {" "}
                <br />
                City is full of parks, theatres, museums, historical and
                architectural monuments. Tashkent is a rarity, a wonder and
                unique place, both ancient and modern city.
              </p>{" "}
              <br />I will pick you up from your hotel or from any other place
              you wish. We will spend all day sightseeing across Tashkent. If
              your time is limited, the sightseeing can be reduced to cover the
              highlights of the city.
            </div>
            <div className="zomin-list">
              <img
                src="https://www.advantour.com/img/uzbekistan/tours/city-tour-tashkent/applied-arts-museum2.jpg"
                alt=""
              />
              <img
                src="https://www.advantour.com/img/uzbekistan/tours/city-tour-tashkent/mustakillik-fontain.jpg"
                alt=""
              />
            </div>
            <div className="more-travel-about">
              <b>Itinerary:</b>
              <br />
              <p>09:00 Starting the tour:</p> <br />
              <p>
                <ul>
                  <li>Visit the Memorial for the Victims of Repression.</li>
                  <li>Tashkent TV tower (distance view).</li>
                  <li>Central Asian Plov Center.</li>
                  <li>Minor Mosque (White Mosque).</li>
                  <li>Monument of Courage.</li>
                </ul>
              </p>{" "}
              <br />
              <p>
                Old City and the Khast-Imam architectural complex:
                Kaffal-as-Shoshi Mausoleum, Barak-Khan Madrasah, Khast-Imam
                Mosque. Mui-Muborak Madrasah – the original Koran of the Caliph
                Usman.
              </p>{" "}
              <br />
              <p>(Walk on resedential blocks of the old town).</p>
              <p>13:00-14:00 Lunch. Continue the tour:</p> <br />
              <ul>
                <li>Chorsu's market (most picturesque market in the city).</li>
                <li>Mustakillik Square (Independence Square).</li>
                <li>Palace of the Grand duke Romanov.</li>
                <li>Theater of Alisher Navoiy (external view).</li>
                <li>Amir Temur's square.</li>
                <li>Tashkent Metro (Underground/Subway).</li>
              </ul>{" "}
              <br />
              <p>18:00 End of the tour.</p>
              <div className="zomin-list">
                <img
                  src="https://www.advantour.com/img/uzbekistan/tours/city-tour-tashkent/chorsu-bazaar.jpg"
                  alt=""
                />
                <img
                  src="https://www.advantour.com/img/uzbekistan/tours/city-tour-tashkent/amir-timur-square.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
