const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const config = {
  IS_ENC: false,
  API_URL: "https://qaone.remit.in",
  // API_URL: "https://ms1.remit.in",
  realexpayment_url: "https://pay.sandbox.realexpayments.com",
  // JUMIO_RETURN_URL: "https://devorp.niveussolutions.com",
  JUMIO_RETURN_URL: "https://qaone.remit.in",
  tickerMessagePosition: {
    HOMEPAGE_TOP: "HOMEPAGE_TOP",
    LOGIN_TOP: "LOGIN_TOP",
    POSTLOGIN_TOP: "POSTLOGIN_TOP", // on dashboard, instant after login
    SIGNUP_TOP: "SIGNUP_TOP",
    USER_NOTIFICATION: "USER_NOTIFICATION", // in notification icon menu
  },
  requestId: (Math.random() + 1).toString(36).substring(5),
  sessionId: generateString(50).trim(),
  key: generateString(16).trim(),
  iv: generateString(16).trim(),
  channelId: "WEB",
    // channelId: "UKORP21_Web",
  // channelId: "CAORP21_Web", // use for ICA
//   sendCountryCode: "CA",
//   sendCurrencyCode: "CAD",
//   recvCountryCode: "IN",
//   recvCurrencyCode: "INR",
};

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
