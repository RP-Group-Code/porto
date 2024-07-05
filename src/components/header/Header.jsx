import React from "react";
import "./header.css";
import CV from "./CVM";
import Sosmed from "./sosmed";
import me from "../../assets/Ramin-k.png";
import bgimg from "../../assets/blob-imgbg.svg";

const header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h1 className="nick" data-aos="fade-down" data-aos-duration="1200">Maruli Hasurungan</h1>
        <h3 className="si" data-aos="fade-down" data-aos-duration="1800">Information System</h3>
        <h4 data-aos="fade-down" data-aos-duration="2500" className="text-light">Web Developer - UI Designer - Android Programmer</h4>
        <CV />
        <Sosmed />
        <div className="info">
          <img src={me} alt="" />
        </div>
        <div className="bgimg">
          <img data-aos="zoom-in" data-aos-duration="1000" src={bgimg} alt="" />
        </div>
        <a href="#contact" className="nameside">
          Indonesia, Sumatera Selatan
        </a>
      </div>
    </header>
  );
};

export default header;
