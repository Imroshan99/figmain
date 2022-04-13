import React, { useReducer } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/TemplateTwo/auth/style.scss";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";

// import SignIn from "./components/TemplateTwo/auth/SignIn"
// import {  Signup } from './components/TemplateTwo/auth/Signup'
import TemplateTwo from "./components/TemplateTwo";
import { config } from "./config";
import { connect } from "react-redux";
const App = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userLastActivitiyAt: new Date(),
      publicKey: "",
      accessToken: "",
      isLoggedIn: false,
      tokenExpiredAt: new Date(),
      tokenExpiredMinute: 4,
    }
  );

  const manageAuth = (type, data) => {
    if (type == "logintoken") {
      var jwtDecoded = jwt_decode(data.token);
      setState({
        accessToken: data.token,
        isLoggedIn: true,
        tokenExpiredAt: new Date(),
        tokenExpiredMinute: jwtDecoded.refreshAt - 1,
      });
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <TemplateTwo state={state} manageAuth={manageAuth} />
      </BrowserRouter>
    </div>
  );
};

// export default App;
const mapDispatchToProps = (dispatch) => {
  return {
    saveConfig: (data) => {
      // dispatch({ type: 'SET_CLIENT_ID', payload: data.clientId }) //ICA
      // dispatch({ type: 'SET_GROUP_ID', payload: data.groupId }) //ICA
      // dispatch({ type: 'SET_TWOFA', payload: data.twofa ? 'Y' : 'N' }) //Y for with opt module

      //Settings for GROUP ID
      const groupIdSettings = {
        template : 'TEMPLATE_ONE',
        signUpForm: {
          formType: "REGULAR", // formType: "REGULAR" | STEPS,
        },
        recipientModule: {
          recipientList: {
            columns: {
              status: "DISABLED", //disable status column
            },
          },
          AddRecipientForm: {
            recipientBankBranchRadio: false,
            defaultRecipientBranch: "LOCATION", //LOCATION or IFSC
            twoFA: "N",
          },
        },
        profileModule: {
          // addressApi : 'ADDRESSNOW',
          inputFields: {},
        },
      };
      dispatch({ type: "SET_GROUP_ID_SETTINGS", payload: groupIdSettings });

      dispatch({ type: "SET_CLIENT_ID", payload: "XR" });
      dispatch({ type: "SET_GROUP_ID", payload: "XR" });
      dispatch({ type: "SET_SEND_COUNTRY_CODE", payload: "US" });
      dispatch({ type: "SET_SEND_CURRENCY_CODE", payload: "USD" });
      dispatch({ type: "SET_RECV_COUNTRY_CODE", payload: "KE" });
      dispatch({ type: "SET_RECV_CURRENCY_CODE", payload: "KES" });

      // dispatch({ type: 'SET_CLIENT_ID', payload: 'ICA' })
      // dispatch({ type: 'SET_GROUP_ID', payload: 'ICA' })
      // dispatch({ type: "SET_SEND_COUNTRY_CODE", payload: "CA" });
      // dispatch({ type: "SET_SEND_CURRENCY_CODE", payload: "CAD" });
      // dispatch({ type: "SET_RECV_COUNTRY_CODE", payload: "IN" });
      // dispatch({ type: "SET_RECV_CURRENCY_CODE", payload: "INR" });

      // dispatch({ type: "SET_CLIENT_ID", payload: "IUK" });
      // dispatch({ type: "SET_GROUP_ID", payload: "IUK" });
      // dispatch({ type: "SET_SEND_COUNTRY_CODE", payload: "GB" });
      // dispatch({ type: "SET_SEND_CURRENCY_CODE", payload: "GBP" });

      dispatch({ type: "SET_TWOFA", payload: "N" });
      dispatch({ type: "SET_SESSION_ID", payload: config.sessionId });
      dispatch({ type: "SET_USER_FULL_NAME", payload: "sdfsdfsdf" });

      // sendCountryCode: state.groupId == 'ICA' ? "CA" : "GB",
      // sendCurrencyCode: state.groupId == 'ICA' ? "CAD" : "GBP",
    },
    savePublicKey: (pubKey) => {
      dispatch({ type: "SET_PUBLIC_KEY", payload: pubKey });
    },
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(null, mapDispatchToProps)(App);
