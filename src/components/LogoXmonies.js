import React from "react";
// import "./login.scss"
import bottom from "../assets/images/svg/btmsvg.svg";
import top from "../assets/images/svg/topsvg.svg";
const LogoXmonies = () => {
  return (
    <div className="login-left">
      <img className="roshanimg" src={top} alt="login-top" />
      <img src={bottom} alt="login-bottom" />
      <div className="login-logo">
        <h1 className="xmt">xMonies</h1>
        <p className="txtlogo">Trasfer made simple</p>
      </div>
    </div>
  );
};

export default LogoXmonies;
