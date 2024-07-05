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
        <Route path="/" exact element={<Home />} />
        <Route path="/tekno" element={<Tekno />} />
        {/* <Route path="/about" exact element={<About />} />
        <Route path="/header" exact element={<Header />} />
        <Route path="/nav" exact element={<Nav />} />
        <Route path="/exc" exact element={<Experience />} />
        <Route path="/ser" exact element={<Services />} />
        <Route path="/porto" exact element={<Porto />} />
        <Route path="/con" exact element={<Contact />} />
        <Route path="/fot" exact element={<Footer />} /> */}
      </Routes>
      {/* <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Porto />
      <Contact />
      <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
