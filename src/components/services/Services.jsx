import React from 'react'
import './services.css'
import {ImCheckmark2} from 'react-icons/im'
const services = () => {
  return (
    <section id="services">
      <h2 data-aos="fade-down" data-aos-duration="1200">Services</h2>
      <h5 data-aos="fade-down" data-aos-duration="1700">What I serve</h5>

      <div className="container services__container">
        <article className="services">
          <div className="services__header" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list" data-aos="flip-down" data-aos-duration="1200">
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Designing Mobile UI</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Designing Web UI</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Android UI Prototype Flow</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Website UI Prototype Flow</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Banner UI Product / UI Banner</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services__header" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500"> 
            <h3>Web Apss / Web UI</h3>
          </div>
          <ul className="services__list" data-aos="flip-down" data-aos-duration="1200">
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Management Information System Laravel</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Catalog System</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Finance System Laravel</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>UI Website HTML-CSS-JS</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Front-End Website ReactJS</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Website Mangement API</p>
            </li>
          </ul>
        </article>

        <article className="services">
          <div className="services__header" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <h3>Android Program</h3>
          </div>
          <ul className="services__list" data-aos="flip-down" data-aos-duration="1200">
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>UI Andorid -XML, Java</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>Auth Android FireBase</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>API Retrofit Library Use DB MYSQL</p>
            </li>
            <li>
              <ImCheckmark2 className="icons_list"/>
              <p>SQL-Lite Database Android System</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services