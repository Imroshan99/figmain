import { Button, Form, Input,notification } from "antd";
import React from "react";
// import "./login.scss"

import  { useState, useReducer, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
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
import useHttp from "../../../hooks/useHttp";

const SignIn = (props) => {

  const AuthReducer = useSelector((state) => state);
  const ConfigReducer = useSelector((state) => state);
  const [form] = Form.useForm();
  const [loading, setLoader] = useState(false);
  let navigate = useNavigate();
  // console.log('store new', store.getState())

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      clientId: ConfigReducer.clientId,
      groupId: ConfigReducer.groupId,
      twofa: ConfigReducer.twofa,
      sessionId: ConfigReducer.sessionId,
      otpType: "LG",
      _isShowOTPBOX: false,
      isModalVisible: false,
      verificationToken: "",
      verifiedToken: "",
      loginData: {},
      nextAction: "",
    }
  );

  const hookUserRiskProfile = useHttp(ProfileAPI.userRiskProfile);
  const hookSendOTP = useHttp(ProfileAPI.sendOTP);
  const hookLogin = useHttp(AuthAPI.login);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    form.setFieldsValue({ password: "" });
  }, []);

  const onFinish = (value) => {
    const payload = {
      requestType: "LOGIN",
      loginId: value.loginId,
      password: value.password,
      noofAttempts: "1",
      custType: "SEND",
      referer: "",
    };

    setLoader(true);
    hookLogin.sendRequest(payload, function (data) {
      if (data.status == "S") {
        if (state.twofa == "N") {
          storeLoginData(data);
          userRiskProfile(data);
        } else {
          setState({ loginData: data });
          userRiskProfile(data);
          sendOTP(data);
        }
      } else {
        notification.error({ message: data.data.errorMessage });
        // notification.error({
        //   message:
        //     "Login Id or password not correct. Please enter valid credentials.",
        // });

        let errors = [];
        data.data.errorList.forEach((error, i) => {
          let errorData = {
            name: error.field,
            errors: [error.error],
          };
          errors.push(errorData);
        });

        if (errors.length > 0) form.setFields(errors);
      }
      setLoader(false);
    });
  };

  const userRiskProfile = (loginData) => {
    const userRiskProfilePayload = {
      requestType: "RISKPROFILE",
      userId: loginData.userId,
      ___token : loginData.token
    };

    setLoader(true);
    hookUserRiskProfile.sendRequest(userRiskProfilePayload, function (data) {
      if (data.status == "S") {
        setState({ nextAction: data.nextAction });
      }
      setLoader(false);
    });
  };

  const sendOTP = (data) => {
    const OTPData = {
      requestType: "SENDOTP",
      otpType: state.otpType,
      userId: data.userId,
      otpOption: "SM",
    };

    setLoader(true);
    hookSendOTP.sendRequest(OTPData, function (data) {
      if (data.status == "S") {
        // notification.success({ message: decodeData.message })
        setState({
          verificationToken: data.verificationToken,
          _isShowOTPBOX: true,
          isModalVisible: true,
        });
      } else {
        notification.error({ message: data.errorMessage });
      }
      setLoader(false);
    });
  };

  const storeLoginData = (loginData) => {
    notification.success({
      message: `WELCOME ${loginData.firstName} ${loginData.lastName}`,
    });
    props.saveUser(loginData, state.nextAction);
    props.manageAuth("logintoken", loginData);

    if (state.nextAction == "KYC_COMPLETE") {
      setTimeout(() => {
        navigate("/new-transaction");
      }, 500);
      // } else if (
      //   state.nextAction == "DOB" ||
      //   state.nextAction == "ADDRESS" ||
      //   state.nextAction == "REVIEW"
      // ) {
      //   setTimeout(() => {
      //     // navigate("/new-transaction");
      //     navigate("/profile-setup");
      //   }, 500);
      // } else if (state.nextAction == "JUMIO") {
      //   // setTimeout(() => { navigate('/profile-setup') }, 500);
      //   setTimeout(() => {
      //     navigate("/jumio-page");
      //   }, 500);
      // } else if (state.nextAction == "PROFILE_REVIEW") {
      //   setTimeout(() => {
      //     navigate("/profile");
      //   }, 500);
    } else {
      setTimeout(() => {
        navigate("/new-transaction");
      }, 500);
    }
  };


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
              onFinish={onFinish}
              labelCol={{span: 10}} wrapperCol={{span: 15}}
            >
              <Form.Item label="Log In Id" name="loginId">
                <Input autoComplete="off" />
              </Form.Item>
              <Form.Item label="Password" name="password">
              <Input autoComplete="off"/>
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

// export default SignIn;
const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (data, nextAction) => {
      // dispatch({ type: 'SET_USER_TOKEN', payload: data.token })
      dispatch({ type: "SET_USER_LAST_LOGIN", payload: data.lastLoginTimeIST });
      dispatch({ type: "SET_USER_ID", payload: data.userId });
      dispatch({ type: "SET_USER_KYC", payload: nextAction });
      dispatch({
        type: "SET_USER_FULL_NAME",
        payload: data.firstName + " " + data.lastName,
      });
      // dispatch({ type: 'SET_USER_LOGIN', payload: true })
    },
  };
};

export default connect(null, mapDispatchToProps)(SignIn);