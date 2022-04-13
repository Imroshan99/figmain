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
      sessionId: ConfigReducer.sessionId,
      twofa: ConfigReducer.twofa,
      otpType: "LG",
      _isShowOTPBOX: false,
      isModalVisible: false,
      verificationToken: "",
      verifiedToken: "",
      loginData: {},
      nextAction: "",
    }
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    form.setFieldsValue({ password: "" });
  }, []);

  const onFinish = (value) => {

    // const data = {
    //   requestId: config.requestId,
    //   requestType: "LOGIN",
    //   channelId: config.channelId,
    //   clientId: state.clientId,
    //   groupId: state.groupId,
    //   sessionId: state.sessionId,
    //   ipAddress: "127.0.0.1",
    //   loginId: value.loginId,
    //   password: value.password,
    //   noofAttempts: "1",
    //   custType: "SEND",
    //   referer: "",
    // };
  
  
    const data = {
      requestId: config.requestId,
      requestType: "LOGIN",
      channelId: config.channelId,
      clientId: "XR",
      groupId: "XR",
      sessionId: "y0MUMkf1j12ufD4QJPHYa7aJy2oRfEbzyZze0dzl18nuUC4DRj",
      ipAddress: "127.0.0.1",
      loginId: value.loginId,
      password: value.password,
      noofAttempts: "1",
      custType: "SEND",
      referer: "",
      twofa:"N"
    };

    if (config.IS_ENC) {
      var key = config.key;
      var iv = config.iv;
      var body = encrypt(data, key, iv);
      var pubValue = iv.concat(key);
      var identifier = publickey(props.appState.publicKey, pubValue);

      var postData = {
        body: body,
        identifier: identifier,
      };
    } else {
      var postData = data;
    }

    setLoader(true);
    AuthAPI.login(postData)
      .then((res) => {
        if (config.IS_ENC) {
          var decode = decrypt(res.data.body, key, iv);
          var decodeData = JSON.parse(decode);
        } else {
          var decodeData = res.data;
        }
        if (decodeData.status == "S") {
          if (state.twofa == "N") {
            storeLoginData(decodeData);
            userRiskProfile(decodeData);
          } else {
            setState({ loginData: decodeData });
            userRiskProfile(decodeData);
            sendOTP(decodeData);
          }
        } else {
          notification.error({ message: res.data.errorMessage })
          // notification.error({
          //   message:
          //     "Login Id or password not correct. Please enter valid credentials.",
          // });

          let errors = [];
          res.data.errorList.forEach((error, i) => {
            let errorData = {
              name: error.field,
              errors: [error.error],
            };
            errors.push(errorData);
          });

          if (errors.length > 0) form.setFields(errors);
        }
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  };

  const userRiskProfile = (data) => {
    const userRiskProfileData = {
      requestId: config.requestId,
      requestType: "RISKPROFILE",
      channelId: config.channelId,
      clientId: state.clientId,
      groupId: state.groupId,
      sessionId: state.sessionId,
      ipAddress: "127.0.0.1",
      userId: data.userId,
    };

    if (config.IS_ENC) {
      var key = config.key;
      var iv = config.iv;
      var body = encrypt(userRiskProfileData, key, iv);
      var pubValue = iv.concat(key);
      var identifier = publickey(props.appState.publicKey, pubValue);

      var postData = {
        body: body,
        identifier: identifier,
      };
    } else {
      var postData = userRiskProfileData;
    }

    setLoader(true);
    ProfileAPI.userRiskProfile(postData, data.token)
      .then((res) => {
        if (config.IS_ENC) {
          var decode = decrypt(res.data.body, key, iv);
          var decodeData = JSON.parse(decode);
        } else {
          var decodeData = res.data;
        }
        // console.log('userRiskProfile API but didn\'t/ work')
        if (decodeData.status == "S") {
          // notification.success({ message: res.data.message });
          setState({ nextAction: decodeData.nextAction });
        } else {
          // notification.error({ message: res.data.errorMessage })
        }
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
      });
  };

  const sendOTP = (data) => {
    const OTPData = {
      requestId: config.requestId,
      requestType: "SENDOTP",
      channelId: config.channelId,
      clientId: state.clientId,
      groupId: state.groupId,
      sessionId: state.sessionId,
      ipAddress: "127.0.0.1",
      otpType: state.otpType,
      userId: data.userId,
      otpOption: "SM",
    };

    if (config.IS_ENC) {
      var key = config.key;
      var iv = config.iv;
      var body = encrypt(OTPData, key, iv);
      var pubValue = iv.concat(key);
      var identifier = publickey(props.appState.publicKey, pubValue);

      var postData = {
        body: body,
        identifier: identifier,
      };
    } else {
      var postData = OTPData;
    }

    setLoader(true);
    ProfileAPI.sendOTP(postData, data.token)
      .then((res) => {
        if (config.IS_ENC) {
          var decode = decrypt(res.data.body, key, iv);
          var decodeData = JSON.parse(decode);
        } else {
          var decodeData = res.data;
        }

        if (decodeData.status == "S") {
          // notification.success({ message: decodeData.message })
          setState({
            verificationToken: decodeData.verificationToken,
            _isShowOTPBOX: true,
            isModalVisible: true,
          });
        } else {
          notification.error({ message: decodeData.errorMessage });
        }
        setLoader(false);
      })
      .catch((error) => {
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

// export default SignIn;
const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (data, nextAction) => {
      // dispatch({ type: 'SET_USER_TOKEN', payload: data.token })
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
