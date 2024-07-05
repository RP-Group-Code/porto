import React from "react";
import "./experience.css";
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id="experience">
      <h2 data-aos="fade-down" data-aos-duration="2000">Experience</h2>
      <h5 data-aos="fade-down" data-aos-duration="2000">My Skill</h5>
      <div className="container experience__container">
        <div className="experience__front" data-aos="zoom-out-up" data-aos-duration="1500">
          <h3 className="front">Frontend</h3>
          <div className="content__experience">
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>DataTables</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
           
            
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>JQuery</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article>
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Ajax</h4>
                <small className="text-light">Beginer</small>
              </div>
            </article>
          </div>
        </div>

        {/* endfrontend */}
        <div className="experience__back" data-aos="zoom-out-up" data-aos-duration="1500">
          <h3>Backend</h3>
          <div className="content__experience">
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Mysql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__detail">
              <HiBadgeCheck className="icon-experience" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* endbackend */}
      </div>
    </section>
  );
};

export default Experience;
