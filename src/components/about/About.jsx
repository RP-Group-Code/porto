import React from "react";
import "./about.css";
import me from "../../assets/Ramin-k.png";
import { FaAward } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { IoColorPaletteSharp } from "react-icons/io5";

const about = () => {
  return (
    <section id="about">
      <h2 data-aos="fade-down" data-aos-duration="1200">
        About Me
      </h2>
      <h5 data-aos="fade-down" data-aos-duration="1200">
        Hello, I'm Maruli
      </h5>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cardsall">
            <a href="#porto">
              <article
                className="about__card"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
            </a>

            <a href="#porto">
              <article
                className="about__card"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <FaLaptopCode className="about__icon" />
                <h5>Projects / Apps</h5>
                <small>20+ Completed</small>
              </article>
            </a>

            <a href="#porto">
              <article
                className="about__card"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <IoColorPaletteSharp className="about__icon" />
                <h5>UI/UX Design</h5>
                <small>10+ Design UI</small>
              </article>
            </a>
          </div>
          <p data-aos="fade-up" data-aos-duration="500">
            Seorang lulusan Information System dengan bekal berbagai sertifikasi
            IT dan management business, sebagai Web Development dan UI design
            website maupun android. Telah mengerjakan berbagai project sistem
            management website maupun pemograman aplikasi android, serta
            memiliki pengalaman kontribusi di bidang IT.
          </p>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="#contact"
            className="btn btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
