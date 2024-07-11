import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/index";
import AboutUs from "./components/about/AboutUs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
