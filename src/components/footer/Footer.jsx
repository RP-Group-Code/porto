import React from "react";
import "./footer.css";
import { GrInstagram } from 'react-icons/gr';
import { BsBehance } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" data-aos="fade-up" data-aos-duration="1000">
        RP GROUP
      </a>

      <ul className="footer__link" data-aos="fade-down" data-aos-duration="1000">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">PortoFolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials" data-aos="fade-up" data-aos-duration="2000">
        <a target="_blank" href="https://www.instagram.com/sangbertu/ "><GrInstagram/></a>
        <a target="_blank" href="https://www.behance.net/marulicrew"><BsBehance/></a>
        <a href=""><FaFacebookF/></a>
      </div>
    </footer>
  );
};

export default footer;
