import React from "react";
// import "./login.scss"

import LogoXmonies from "./LogoXmonies";
const Login = () => {
  return (
    <div className="login">
      <LogoXmonies />
      <div className="login-right">
        <div className="login-div">
          <span className="login-head">Log In</span>
          <div>
            <span className="login-line">New to xMonies? </span>
            <span className="login-secline">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
