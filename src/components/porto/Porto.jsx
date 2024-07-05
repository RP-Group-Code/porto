import React from "react";
import "./porto.css";
import porto1 from "../../assets/RPstayed.png";
import porto2 from "../../assets/Rpstore.png";
import porto3 from "../../assets/SimponiMobile.png";
import porto4 from "../../assets/Catalog.png";
import porto5 from "../../assets/SIM.jpg";
import porto6 from "../../assets/UI Porto.jpg";
// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const porto = () => {
  return (
    <section id="porto"
      // id="porto"
      // modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      // slidesPerView={3}
      // pagination={{ clickable: true }}
    >
      <h2 data-aos="fade-down" data-aos-duration="1000">Portofolio</h2>
      <h5 data-aos="fade-down" data-aos-duration="1500">My Project</h5>

      <div className="container portofolio__container">
        <article className="portofolio__item">
          <div className="portofolio__item">
            <div className="portofolio__image" data-aos="flip-left" data-aos-duration="1000">
              <img src={porto1} alt="" />
            </div>
            <h3>UI/UX Mobile RPstayed</h3>
            {/* <a href="" target="_blank" className="btn">
              Look At Order
            </a> */}
            
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item" >
            <div className="portofolio__image" data-aos="flip-up" data-aos-duration="1000">
              <img src={porto2} alt="" />
            </div>
            <h3>UI/UX Web RPstore</h3>
            {/* <a href="" target="_blank" className="btn">
              Look At Order
            </a> */}
            
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item">
            <div className="portofolio__image" data-aos="flip-right" data-aos-duration="1000">
              <img src={porto3} alt="" />
            </div>
            <h3>UI/UX E-Learnig Mobile</h3>
            {/* <a href="" target="_blank" className="btn">
              Look At Order
            </a> */}
            
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item"> 
            <div className="portofolio__image" data-aos="flip-left" data-aos-duration="1000">
              <img src={porto4} alt="" />
            </div>
            <h3>Web Catalog</h3>
            {/* <a href="" target="_blank" className="btn">
              Look At Order
            </a> */}
            <a href="#contact" className="btn btn-primary">
              Send Message
            </a>
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item">
            <div className="portofolio__image" data-aos="flip-up" data-aos-duration="1000">
              <img src={porto5} alt="" />
            </div>
            <h3>Fullstack System Management Housing </h3>
            {/* <a href="" target="_blank" className="btn">
              Look At Order
            </a> */}
            <a href="https://moydom.roeli.my.id/dashboard" target="__blank" className="btn btn-secondary">
              See Project
            </a>
          </div>
        </article>

        <article className="portofolio__item">
          <div className="portofolio__item">
            <div className="portofolio__image" data-aos="flip-right" data-aos-duration="1000">
              <img src={porto6} alt=""/>
            </div>
            <h3>Front-End Developer</h3>
            {/* <a href="" target="_blank" className="btn">
              Look At Order
            </a> */}
            <a href="#contact" className="btn btn-primary">
              Send Message
            </a>
          </div>
        </article>

      </div>
    </section>
  );
};

export default porto;
