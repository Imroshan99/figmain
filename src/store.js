import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import profileReducer from './reducers/profileReducer';
import {
  getToken,
  getUserID,
  getUserLogin,
  getUserFullName,
  getUserKYC,
} from "../src/reducers/AuthReducer";
import {
  getClientId,
  getGroupId,
  getSendCountryCode,
  getSendCurrencyCode,
  getRecvCountryCode,
  getRecvCurrencyCode,
  getSessionId,
  getTwofa,
  getPubKey,
  getGroupIdSettings,
} from "../src/reducers/ConfigReducer";

const masterReducer = combineReducers({
  accessToken: getToken,
  userID: getUserID,
  userKYC: getUserKYC,
  userFullName: getUserFullName,
  isLoggedIn: getUserLogin,
  clientId: getClientId,
  groupId: getGroupId,
  groupIdSettings: getGroupIdSettings,
  twofa: getTwofa,
  pubkey: getPubKey,
  sessionId: getSessionId,
  sendCountryCode: getSendCountryCode,
  sendCurrencyCode: getSendCurrencyCode,
  recvCountryCode: getRecvCountryCode,
  recvCurrencyCode: getRecvCurrencyCode,
});

const store = createStore(
  masterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };
