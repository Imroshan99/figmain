export const getClientId = (state = '', action) => {
    if (action.type === 'SET_CLIENT_ID') {
        return action.payload
    }
    return state;
}

export const getGroupId = (state = '', action) => {
    if (action.type === 'SET_GROUP_ID') {
        return action.payload
    }
    return state;
}
export const getGroupIdSettings = (state = '', action) => {
    if (action.type === 'SET_GROUP_ID_SETTINGS') {
        return action.payload
    }
    return state;
}

export const getTwofa = (state = '', action) => {
    if (action.type === 'SET_TWOFA') {
        return action.payload
    }
    return state;
}

export const getPubKey = (state = '', action) => {
    if (action.type === 'SET_PUBLIC_KEY') {
        return action.payload
    }
    return state;
}

export const getSessionId = (state = '', action) => {
    if (action.type === 'SET_SESSION_ID') {
        return action.payload
    }
    return state;
}

export const getSendCountryCode = (state = '', action) => {
    if (action.type === 'SET_SEND_COUNTRY_CODE') {
        return action.payload
    }
    return state;
}

export const getSendCurrencyCode = (state = '', action) => {
    if (action.type === 'SET_SEND_CURRENCY_CODE') {
        return action.payload
    }
    return state;
}

export const getRecvCurrencyCode = (state = '', action) => {
    if (action.type === 'SET_RECV_CURRENCY_CODE') {
        return action.payload
    }
    return state;
}

export const getRecvCountryCode = (state = '', action) => {
    if (action.type === 'SET_RECV_COUNTRY_CODE') {
        return action.payload
    }
    return state;
}