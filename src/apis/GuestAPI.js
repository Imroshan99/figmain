import axios from "axios";
import { config } from "../config";

export const GuestAPI = {
    groupConfig: async (data) => {
        return await axios.post(`${config.API_URL}/services/group-config`, data);
    },
    countryList: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/country-lists`, data);
    },
    sendingCountryList: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/sending-country-lists`, data);
    },
    receiverCountryList: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/recv-country-lists`, data);
    },
    getCountryPhoneCodes: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/country-phone-codes`, data);
    },
    getExchangeRates: async () => {
        return await axios.get(`${config.API_URL}/services/intg/IUK/ex-rate`);
    },
    postExchangeRate: async (data) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/txn/exchange-rate`,
            data: data
        };

        return await axios(axosConfig);
    },
    getNationality: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/nationality-lists`, data);
    },
    stateCities: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/state-cities`, data);
    },
    verifyOTP: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/verify-otp`, data);
    },
    reSendOTP: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/re-send-otp`, data);
    },
    tickerMessages: async (data) => {
        return await axios.post(`${config.API_URL}/services/remit/ticker-messages`, data);
    },
    bankBranchData: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/recv/bank-branch-data`, data);
    },
    uniqueIdentifierList: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/unique-identifier-names`, data);
    },
    serviceKey: async () => {
        return await axios.get(`${config.API_URL}/services/key`);
    },
    countryPhoneCodes: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/country-phone-codes`,
            data: data
        };

        return await axios(axosConfig);
    },
    citizenshipLists: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/citizenship-lists`,
            data: data
        };

        return await axios(axosConfig);
    },
    occupationLists: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/occupation-lists`,
            data: data
        };

        return await axios(axosConfig);
    },
    relationshipLists: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/recv/relationship-lists`,
            data: data
        };

        return await axios(axosConfig);
    },
    
    professionLists: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/profession-lists`,
            data: data
        };

        return await axios(axosConfig);
    },
    countryStates: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/country-states`,
            data: data
        };

        return await axios(axosConfig);
    },
    paymentOption: async (data) => {
        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/acc/payment-option`,
            data: data
        };

        return await axios(axosConfig);
    },
    searchAddress: async (searchText) => {

        var axosConfig = {
            method: 'get',
            url: `https://api.addressnow.co.uk/CapturePlus/Interactive/Find/v2.00/json3ex.ws?Key=WJ77-GX64-CP77-WE44&Country=GBR&SearchTerm=${searchText}&LanguagePreference=en&LastId=&SearchFor=Everything&OrderBy=&$block=true&$cache=true`
        };

        return await axios(axosConfig);
    },
    findSubAddress: async (id, searchTerm) => {

        var axosConfig = {
            method: 'get',
            url: `https://api.addressnow.co.uk/CapturePlus/Interactive/Find/v2.00/json3ex.ws?Key=WJ77-GX64-CP77-WE44&Country=GBR&SearchTerm=${searchTerm}&LanguagePreference=en&LastId=${id}&SearchFor=Everything&OrderBy=&$block=true&$cache=true`
        };

        return await axios(axosConfig);
    },
    selctedSearchAddress: async (searchID) => {
        var axosConfig = {
            method: 'get',
            url: `https://api.addressnow.co.uk/CapturePlus/Interactive/RetrieveFormatted/v2.00/json3ex.ws?Key=WJ77-GX64-CP77-WE44&Id=${searchID}&Source=&$cache=true`
        };

        return await axios(axosConfig);
    },
    deliveryOptions: async (data) => {

        var axosConfig = {
            method: 'post',
            url: `${config.API_URL}/services/usr/recv/delivery-options`,
            data: data
        };

        return await axios(axosConfig);
    },
    getDeliveryOptions: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/recv/delivery-options`, data);
    },
    getBankListData: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/recv/bank-lists`, data);
    },
    getBankBranchState: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/country-states`, data);
    },
    getBankBranchCity: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/state-cities`, data);
    },
    getBankBranchNames: async (data) => {
        return await axios.post(`${config.API_URL}/services/usr/recv/bank-branches`, data);
    },
}