import React from "react";
import "./tekno.css";
// import gif from "../../assets/gifmn.gif";
import Spline from "@splinetool/react-spline";

const tekno = () => {
  return (
    <>
      <section id="tekno__header">
        <div
          className="card__header"
          data-aos="zoom-out-up"
          data-aos-duration="500"
        >
          <h1>HAUNTING </h1>
          <div className="row experience__word">
            <div
              className="col-1"
              data-aos="zoom-in-up"
              data-aos-duration="1100"
            >
              E
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="1300"
            >
              X
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="1500"
            >
              P
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="1700"
            >
              E
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="1900"
            >
              R
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="2100"
            >
              I
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="2500"
            >
              N
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="2700"
            >
              C
            </div>
            <div
              className="col-1"
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              E
            </div>
          </div>
        </div>

        <div
          className="content__3d"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        >
          <Spline
            className="bloop"
            scene="https://prod.spline.design/5z9sQUw-dry5YK7U/scene.splinecode"
          />
        </div>
      </section>
    </>
  );
};

export default tekno;
