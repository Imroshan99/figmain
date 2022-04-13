import { Button, Form, Input } from "antd";
import React from "react";
// import "./login.scss"

import  { useState, useReducer, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Input, notification, Spin, Menu, Dropdown, Button } from "antd";
// import ExchangeRate from "../../../containers/ExchangeRate";
// import { flags } from "../../../services/utility/flags";

import { AuthAPI } from "../../../apis/AuthAPI";
import { config } from "../../../config";
import { connect, useSelector } from "react-redux";
// import OTPBox from "../../../containers/OTPBox";
import { ProfileAPI } from "../../../apis/ProfileAPI";
import { encrypt, decrypt, publickey } from "../../../helpers/makeHash";
import LogoXmonies from "../Layout/LogoXmonies";

const SignIn = (props) => {
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
          <div className="login-form">
            <Form
              onFinish={(values) => {
                console.log("--data--", values);
              }}
              labelCol={{span: 10}} wrapperCol={{span: 15}}
            >
              <Form.Item label="Log In Id" name="login">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item label="Password" name="password">
              <Input.Password autoComplete="off"/>
              </Form.Item>
              <span className="forgot-pass">Forgot Password?</span>
              <br></br>
              {/* {({ getFieldsValue }) => {
                const { login, password } = getFieldsValue();
                const formIsComplete = !login && !password;
                return (
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={false}
                  >
                    Log In
                  </Button>
                );
              }} */}
              <Form.Item wrapperCol={{span:24}}>
                <Button block text-white htmlType="submit"><span>Login</span></Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
