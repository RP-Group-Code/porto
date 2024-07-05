import React from "react";
import Teknos from "./components/tekno/Tekno";
import Tcontent from "./components/tekno-content/Tcontent";
import Nav from "./components/nav/Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Tekno = () => {
  return (
    <>
      <Nav />
      <Teknos />
      <Tcontent />
    </>
  );
};

export default Tekno;
