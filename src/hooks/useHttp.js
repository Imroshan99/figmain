import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GuestAPI } from "../apis/GuestAPI";
import { config } from "../config";
import { encrypt, publickey, decrypt } from "../helpers/makeHash";

export default function useHttp(axiosReq) {
  const ConfigReducer = useSelector((state) => state);
  const AuthReducer = useSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  const sendRequest = useCallback(
    async (customPaylod, response) => {
      setIsLoading(true);
      try {
        const { ___token, ..._customPaylod } = customPaylod;
        console.log('___token', ___token)
        const payload = {
          requestId: config.requestId,
          channelId: config.channelId,
          clientId: ConfigReducer.clientId,
          groupId: ConfigReducer.groupId,
          sessionId: ConfigReducer.sessionId,
          ipAddress: "127.0.0.1",
          ..._customPaylod,
        };
        console.log("PAYLOAD", payload);
        if (config.IS_ENC) {
          var key = config.key;
          var iv = config.iv;

          var body = encrypt(payload, key, iv);
          var pubValue = iv.concat(key);
          var identifier = publickey(ConfigReducer.pubkey, pubValue);

          var postData = {
            body: body,
            identifier: identifier,
          };
        } else {
          var postData = payload;
        }

        const accessToken = ___token ? ___token : AuthReducer.accessToken;
        console.log("REQUEST TYPE__", customPaylod.requestType);
        console.log("token", accessToken);
        const res = await axiosReq(postData, accessToken);
        console.log(res);

        if (config.IS_ENC) {
          var decode = decrypt(res.data.body, key, iv);
          var decodeData = JSON.parse(decode);
        } else {
          var decodeData = res.data;
        }
        console.log("RESPONSE ", decodeData);
        response(decodeData);
        // return new Promise(resolve => {
        //   resolve(decodeData)
        // }, reject => {
        //   reject('')
        // })
        setIsLoading(false);
        //   console.log(decodeData);
        //   if (decodeData.status == "S") {
        //     // setState({ phoneCodes: decodeData.responseData });
        //   }
        //   console.log(resp.data);
        // const resp = await axios.get(url);
        //   const resp = await axios.post(
        //     `${config.API_URL}/services/usr/nationality-lists`,
        //     payload
        //   );
        //   const data = await res?.data;
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    },
    [axiosReq]
  );

  return { isLoading, apiData, serverError, sendRequest };
}
