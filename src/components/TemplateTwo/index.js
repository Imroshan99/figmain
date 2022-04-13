import React, {Fragment} from "react";
// import { Helmet } from "react-helmet";
// import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import { Route, Router, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


// import Home from "./pages/Home";
// import Dashboard from "./user/Dashboard";
// import Header from "./layout/Header";
// import AddRecipient from "./user/recipient/AddRecipient";
// import RecipientList from "./user/recipient/RecipientList";
// import Profile from "./user/profile/Profile";
// import TranctionAction from "./user/sendmoney/TranctionAction";
// import TransactionList from "./user/sendmoney/TransactionList";
// import BankAccountList from "./user/bankaccounts/CANADA/BankAccountList";
// import AddBankAccount from "./user/bankaccounts/CANADA/AddBankAccount";
// import RepeatTranscation from "./user/sendmoney/RepeatTransaction";
// // import BankAccountList from './user/bankaccounts/BankAccountList';
// // import AddBankAccount from './user/bankaccounts/AddBankAccount';
// import ThankYou from "./user/sendmoney/ThankYou";
// import BankThankYou from "./user/sendmoney/BankThankYou";
// import ProfileSetup from "./user/profile/ProfileSetup";
// import TrackMoneyTransfer from "./user/sendmoney/TrackMoneyTransfer";
// import JumioPage from "./user/profile/JumioPage";
// import ChangePassword from "./user/profile/ChangePassword";
// import Notification from "./user/Notification";
// import ForgotUserID from "./auth/ForgotUserID";
// import ForgotPassword from "./auth/ForgotPassword";
// import UnlockUserid from "./auth/UnlockUserid";
// import RateAlert from "./user/rate_alert/RateAlert";
// import ThankYouScheduleTransaction from "./user/sendmoney/ThankYouScheduleTransaction";
// import { settings } from "./../../services/utility/settings";
// import { PublicRoute } from "./../../Routes/PublicRoute";
// import SingleSignUpForm from "./auth/SingleSignUpForm";
// import KycPage from "./auth/KYC";
// import RecipientRequestList from "./user/recipient/RecipientRequestList";



// const RequestMoney = React.lazy(() => import("./pages/request-money"));

export default function TemplateTwo({ state, manageRefreshToken, manageAuth }) {
//   const AuthReducer = useSelector((state) => state);
  return (
    <>
      {/* <Helmet>
        <title>{settings[window.location.hostname].title}</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={require("./../../assets/images/fav_icons/KCB_logo.ico")}
        />
      </Helmet>
      <Header appState={state} manageRefreshToken={manageRefreshToken} /> */}

      <Routes>
        {/* <Route
          path="/request-money"
          element={<RequestMoney appState={state} manageAuth={manageAuth} />}
        /> */}

        {/* <Route
          path="/signin"
          element={
            <PublicRoute auth={{ isLoggedIn: state.isLoggedIn }}>
              <SignIn appState={state} manageAuth={manageAuth} />
            </PublicRoute>
          }
        /> */}
        <Route path="/signin" element={<SignIn appState={state} manageAuth={manageAuth} />}/>
        {/* <Route
          path="/signup"
          element={
            <PublicRoute auth={{ isLoggedIn: state.isLoggedIn }}>
              {AuthReducer.groupIdSettings.signUpForm.formType === "REGULAR" ? (
                <SingleSignUpForm appState={state} manageAuth={manageAuth} />
              ) : (
                <SignUp appState={state} manageAuth={manageAuth} />
              )}
            </PublicRoute>
          }
        /> */}

        {/* <Route
          path="/forgot-userid"
          element={<ForgotUserID appState={state} manageAuth={manageAuth} />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword appState={state} manageAuth={manageAuth} />}
        />
        <Route
          path="/unlock-userid"
          element={<UnlockUserid appState={state} manageAuth={manageAuth} />}
        /> */}
        {/* <Route
          exact
          path="/"
          element={
            <PublicRoute auth={{ isLoggedIn: state.isLoggedIn }}>
              <Home appState={state} />
            </PublicRoute>
          }
        /> */}

        {/* <Route path="*" element={<PageNotFound appState = {state}/>} /> */}
        {/* <Route path="*" element={<Home appState={state} />} /> */}
        {/* <Route path="/track-money-transfer" element={<TrackMoneyTransfer appState={state} />} /> */}
        {/* <Route
          path="/ThankYouScheduleTransaction"
          element={
            <ThankYouScheduleTransaction
              appState={state}
              manageRefreshToken={manageRefreshToken}
            />
          }
        /> */}

        {/* {state.isLoggedIn && (
          <Fragment> */}
            {/* <Route
              path="/dashboard"
              element={
                <Dashboard
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            /> */}
{/* 
            <Route
              path="/kyc"
              element={
                <KycPage
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/change-password"
              element={
                <ChangePassword
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            /> */}
            {/* <Route path="/my-bank-accounts" element={<BankAccountList appState={state} manageRefreshToken={manageRefreshToken} />} /> */}
            {/* <Route
              path="/my-bank-accounts"
              element={
                <BankAccountList
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/add-bank-account"
              element={
                <AddBankAccount
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/my-recipient"
              element={
                <RecipientList
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/recipient-request-list"
              element={
                <RecipientRequestList
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/add-recipient"
              element={
                <AddRecipient
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/new-transaction"
              element={
                <TranctionAction
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/repeat-transaction"
              element={
                <RepeatTranscation
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/transaction-list"
              element={
                <TransactionList
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/track-money-transfer"
              element={
                <TrackMoneyTransfer
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/jumio-page"
              element={
                <JumioPage
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />

            <Route path="/thankYou" element={<ThankYou appState={state} />} />
            <Route
              path="/bankThankYou"
              element={<BankThankYou appState={state} />}
            />
            <Route
              path="/profile-setup"
              element={<ProfileSetup appState={state} />}
            />

            <Route
              path="/rate-alert"
              element={
                <RateAlert
                  appState={state}
                  manageRefreshToken={manageRefreshToken}
                />
              }
            />
            <Route
              path="/notification-list"
              element={<Notification appState={state} />}
            /> */}
          {/* </Fragment>
        )} */}
      </Routes>
    </>
  );
}
