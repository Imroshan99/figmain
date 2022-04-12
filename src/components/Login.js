import { Button, Form, Input } from "antd";
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
          <div className="login-form">
            <Form
              onFinish={(values) => {
                console.log("--data--", values);
              }}
              labelCol={{span: 10}} wrapperCol={{span: 15}}
            >
              <Form.Item label="Login In Id" name="login">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input autocomplete="off" />
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

export default Login;
