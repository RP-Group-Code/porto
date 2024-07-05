import React from "react";
import "./tcontent.css";
import moon from "../../assets/MOON.png";
import stars from "../../assets/stars.png";
import { Parallax } from "react-parallax";

const Tcontent = () => {
  return (
    <section id="tekno__content">
      <div className="tcontent__card" id="tcontent__card">
        <Parallax className="paralax__moon" bgImage={moon} strength={550}>
          <div className="content__moon"></div>
        </Parallax>
        <div className="content__pegunungan">
          <svg
            className="svg01"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#163d50"
              fill-opacity="1"
              d="M0,256L40,240C80,224,160,192,240,181.3C320,171,400,181,480,202.7C560,224,640,256,720,229.3C800,203,880,117,960,96C1040,75,1120,117,1200,149.3C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="svg02"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              className="path01"
              fill="#253a29"
              fill-opacity="1"
              d="M0,256L240,96L480,192L720,32L960,256L1200,192L1440,288L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
            <path
              fill="#36533c"
              fill-opacity="1"
              d="M0,192L240,32L480,288L720,256L960,224L1200,96L1440,96L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
          </svg>

          <svg
            className="svg04"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              className="path02"
              fill="#111a2c"
              fill-opacity="1"
              d="M0,160L40,176C80,192,160,224,240,218.7C320,213,400,171,480,170.7C560,171,640,213,720,208C800,203,880,149,960,144C1040,139,1120,181,1200,186.7C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="content__texperience">
          <div className="card__texperience">
            <div className="stars">
              <Parallax bgImage={stars} strength={-400}>
                <div className="content__stars"></div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tcontent;
