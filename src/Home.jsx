import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Porto from "./components/porto/Porto";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Services />
      <Porto />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
