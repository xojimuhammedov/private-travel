import React from "react";
import Footer from "../footer";
import Main from "./main";

function Zomin() {
  return (
    <>
      <Main />
      <div className="cotainer">
        {" "}
        <div className="more-comp-bottom">
          <div className="more-comp-right">
            <h1 style={{ marginTop: "15px" }}>
              Day Tour to Zaamin near Jizzakh
            </h1>
            <div className="more-travel-about">
              <p style={{ marginTop: "15px" }}>
                Zaamin tourism zone is an ecologically pure region, which has
                preserved its original appearance and has unique flora and
                fauna. It is located on the territory of Zaamin State Reserve in
                the Jizzakh Region of Uzbekistan on the tourist route between
                Samarkand and Tashkent.
              </p>
              <br />
              <div className="zomin-list">
                <img
                  src="https://www.advantour.com/img/uzbekistan/jizzakh/zaamin5_sm.jpg"
                  alt=""
                />
                <img
                  src="https://www.advantour.com/img/uzbekistan/jizzakh/zaamin3_sm.jpg"
                  alt=""
                />
              </div>
              <p>
                It is known from history that Zaamin was a part of one of the
                most ancient regions in Central Asia: Ustrushana, surrounded by
                ancient regions: Sogd, Bactria, Fergana and Chach. According to
                archeological sources, the age of Zaamin exceeds two thousand
                years old (2nd-1st centuries BC). During excavations
                archeologists found remains of a settlement aged more than 2500
                years.
              </p>{" "}
              <br />
              <div className="zomin-list">
                <img
                  src="https://www.advantour.com/img/uzbekistan/jizzakh/zaamin1_sm.jpg"
                  alt=""
                />
                <img
                  src="https://www.advantour.com/img/uzbekistan/jizzakh/zaamin6_sm.jpg"
                  alt=""
                />
              </div>
              <br />
              <p>
                Today Zaamin is the green area, rich in various species of
                birds. In the depths of pine forests you can find such rare
                birds as a ring dove, bunting, turtle dove, blackbird, Turkestan
                owl and Turkestan starling. Also here you can find an unusual
                bird: white-winged grosbeak, with black, yellow and green
                feathering, which eats conifer seeds.
              </p>{" "}
              <br />
              <p>
                In addition to unique nature, Zaamin has rich recreational
                resources. The national park is an ideal place for ecotourism,
                and Zaamin mountains are a candidate to the UNESCO List of
                Natural World Heritage.
              </p>
              <br />
              <p>
                Zaamin Reserve is especially beautiful in the spring and autumn.
                At these seasons the nature of the park is variegated in bright
                colors and mountain air acquires pleasant freshness. Unique
                feature of the national protected zone makes Zaamin an ideal
                place for active tourism and resort-like recreation.
              </p>
              <div className="zomin-list">
                <img
                  src="https://www.advantour.com/img/uzbekistan/jizzakh/zaamin2_sm.jpg"
                  alt=""
                />
                <img
                  src="https://www.advantour.com/img/uzbekistan/jizzakh/zaamin4_sm.jpg"
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
}

export default Zomin;
