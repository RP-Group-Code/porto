// import React, { useState } from "react";
import React from "react";
import { useState } from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FaPalette } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const { activeNav, setActiveNav } = useState("#");
  return (
    <nav>
      <div className="navbar">
        {/* <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#home' ? 'active' : ''}><ImHome /></a> */}
        {/* <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
          <BsFillInfoCircleFill />
        </a>
        <a href="#experience">
          <MdWork />
        </a>
        <a href="#services">
          <FaThList />
        </a>
        <a href="#porto">
          <BsImages />
        </a>
        <a href="#contact">
          <FaUserAlt />
        </a> */}
        <Link to="/">
          <ImHome />
          {/* <idv className="home">
            Home
          </idv> */}
        </Link>
        <Link to="/Tekno">
          <FaPalette />
        </Link>
      </div>
      <div className="copyright">
        Copyright © 2018-2022 RPGroup -<b>rpV.01</b>-
      </div>
    </nav>
  );
};

export default Nav;
