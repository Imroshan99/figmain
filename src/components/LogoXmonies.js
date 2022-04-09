import React from "react";
// import "./login.scss"
import alok from "../assets/btmsvg.svg";
import roshan from "../assets/topsvg.svg";
const LogoXmonies = () => {
  return (
    <div className="login-left">
      <img className="roshanimg" src={roshan} alt="top-roshan" />
      <img src={alok} alt="bottom-alok" />
      <div className="login-logo">
        <h1 className="xmt">xMonies</h1>
        <p className="txtlogo">Trasfer made simple</p>
      </div>
    </div>
  );
};

export default LogoXmonies;
