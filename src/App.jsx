import React from "react";
// import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
// import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
// import Porto from "./components/porto/Porto";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer";
import Tekno from "./Tekno";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Home /> */}

      <Routes>
        <Route path="/porto" exact element={<Home />} />
        <Route path="/tekno" element={<Tekno />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
