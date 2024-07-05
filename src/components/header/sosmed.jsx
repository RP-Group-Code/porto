import React from "react";
import {BsInstagram} from 'react-icons/bs'
import {ImBehance2} from 'react-icons/im'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'

const sosmed = () => {
  return (
    <div className="header__sosmed">
      <a data-aos="fade-right" data-aos-duration="600" id="link " target="_blank " href="https://www.instagram.com/sangbertu/ ">
      <BsInstagram/>
      </a>

      <a data-aos="fade-right" data-aos-duration="1100" id="link " target="_blank " href="mailto:porto@ruliproject.site">
      <SiGmail/>
      </a>

      <a data-aos="fade-right" data-aos-duration="1600" id="link " target="_blank " href="https://www.behance.net/marulicrew">
      <ImBehance2/>
      </a>

      <a data-aos="fade-right" data-aos-duration="2100" id="link " target="_blank " href="https://www.linkedin.com/in/maruli-hasurungan-0ab67a234/">
      <BsLinkedin/>
      </a>

    </div>
  );
};

export default sosmed;
