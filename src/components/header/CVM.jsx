import React from 'react'
import CV from '../../assets/CVnew.pdf'
import "./header.css";

const CVM = () => {
  return (
    <div className="cvm">
        <a data-aos="fade-left" href="#contact" className="btn btn-primary">Contact Me</a>
        <a data-aos="fade-right" href={CV} downlaod target="_blank" className="btn">Download CV</a>
        {/* <a data-aos="fade-left" className="btn btn-primary">
          <link to="/tekno/Tekno">
           Tecnology
          </link>
        </a> */}
       
    </div>

  )
}

export default CVM