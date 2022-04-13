import axios from "axios";
import { config } from "../config";
// import { AuthService } from "../services/AuthService";

export const ProfileAPI = {
    userRiskProfile: async (data, token) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/user-risk-profile`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    sendOTP: async (data, token, otpFor = null) => {

        if (otpFor == 'Edit_Contact') {
            var axosConfig = {
                method: 'post',
                url: `${config.API_URL}/services/usr/send-otp`,
                data: data
            };

        } else {
            var axosConfig = {
                method: 'post',
                url: `${config.API_URL}/services/usr/send-otp`,
                headers: {
                    'Authorization': `AuthToken ${token}`,
                    'Content-Type': 'application/json'
                },
                data: data
            };
        }


        return await axios(axosConfig);
    },
    getProfile: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/profile-details`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    incomeLists: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/income-lists`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    
    editProfile: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/edit-profile`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    userDocUpload: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/verification/user-doc-upload`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    editSenderContactdtls: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/edit-sender-contactdtls`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
    notificationLists: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/notification-lists`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },

    changePassword: async (data, token) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/change-password`,
            headers: {
                'Authorization': `AuthToken ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(axosConfig);
    },
}