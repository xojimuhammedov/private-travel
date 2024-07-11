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
            <div className="img-more">
              <img
                src="https://azizguide.com/thumb/2/xycVvhid7bIVCDbMC9lBjg/90r90/d/tashkent_khast-imam_square_2.jpg"
                alt=""
              />
              <img
                src="https://azizguide.com/thumb/2/0QdCyOmNfky2wQvRMghQpw/90r90/d/tashkent_chorsu.jpg"
                alt=""
              />
              <img
                src="https://azizguide.com/thumb/2/cvnNgQnJptwO1fvIb1RlOw/90r90/d/tashkent_old_city.jpg"
                alt=""
              />
              <img
                src="https://azizguide.com/thumb/2/lzuKbUG46W1EFXKLE4DFOw/90r90/d/tashkent_samsa.jpg"
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
            <div className="img-more">
              <img
                src="https://azizguide.com/thumb/2/PAJZxIcJ5A-sPYf1NF0wAw/90r90/d/tashkent_navoi_theatre.jpg"
                alt=""
              />
              <img
                src="https://azizguide.com/thumb/2/NMWerJBnYX1UTaQcnOQYiw/90r90/d/tashkent_khast-imam_square.jpg"
                alt=""
              />
              <img
                src="https://azizguide.com/thumb/2/aqgmosvyuLnVnFJH3EzY4Q/90r90/d/tashkent_grande_duke_romanovs_palace.jpg"
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
              <div className="img-more">
                <img
                  src="https://azizguide.com/thumb/2/U9UwPoSq_JHFt5QjKslLXw/90r90/d/tashkent_chorsu_dome.jpg"
                  alt=""
                />
                <img
                  src="https://azizguide.com/thumb/2/2b3VHH7BdQ34VuBxlp9z1Q/90r90/d/tashkent_chorsu_spices.jpg"
                  alt=""
                />
                <img
                  src="https://azizguide.com/thumb/2/QmwUaEwA_algjtIAL1a89w/90r90/d/tashkent_chorsu_bazaar.jpg"
                  alt=""
                />
                <img
                  src="https://azizguide.com/thumb/2/uWIlInONawDVuwn3WzCFtg/90r90/d/tashkent_pilaf_center.jpg"
                  alt=""
                />
              </div>{" "}
              <br />
              <p>
                {" "}
                <strong>Price for the tour:</strong>&nbsp;$140 (1-3 people)
                sedan car,&nbsp; $250 (4–6&nbsp;people) minivan, $300 (6-8
                people) minivan.
              </p>{" "}
              <br />
              <p>
                <strong>Tour price includes:</strong>&nbsp;My guiding and
                driving services.
              </p>{" "}
              <br />
              <p>
                <strong>Tour price excludes:</strong>&nbsp;Lunch and entrance
                tickets to the Mui-Muborak Madrasah.
              </p>{" "}
              <br /> <br />
              <Link to={"#contact"}>Contact me</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
