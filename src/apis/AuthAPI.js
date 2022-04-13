import axios from "axios";
import { config } from "../config";

export const AuthAPI = {
    login: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/login`, data);
    },
    saveLeads: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/save-leads`, data);
    },
    forgotUserID: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/forgot-loginid`, data);
    },
    forgotPassword: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/forgot-password`, data);
    },
    resetPassword: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/reset-password`, data);
    },
    unlockUserid: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/unlock-userid`, data);
    },
    checkDedupe: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/check-dedupe`, data);
    },
    signUp: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/signup`, data);
    },
    refreshToken: async (data, token) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/refresh-token`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    netverifyInitiate: async (data, token) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/verification/netverify-initiate`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    netverifyResponse: async (data, token) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/verification/netverify-response`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },

    netverifyCallbackResponse: async (data, token) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/verification/netverify-callback-response`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    }
}