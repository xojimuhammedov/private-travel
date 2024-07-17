import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/index";
import AboutUs from "./components/about/AboutUs";

import Index from "./components/more";
import Samarkand from "./components/more/samarkand";
import Khiva from "./components/more/khiva";
import Nukus from "./components/more/nukus";
import Bukhara from "./components/more/bukhara";
import Chimgan from "./components/more/chimgan";
import Zomin from "./components/more/zomin";
import Tajikistan from "./components/more/tajikistan";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more-tashkent" element={<Index />} />
        <Route path="/more-samarkand" element={<Samarkand />} />
        <Route path="/more-khiva" element={<Khiva />} />
        <Route path="/more-nukus" element={<Nukus />} />
        <Route path="/more-bukhara" element={<Bukhara />} />
        <Route path="/more-chimgan" element={<Chimgan />} />
        <Route path="/more-zomin" element={<Zomin />} />
        <Route path="/more-tajikistan" element={<Tajikistan />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
