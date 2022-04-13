export const getToken = (state = '', action) => {
    if (action.type === 'SET_USER_TOKEN') {
        return action.payload
    }
    return state;
}

export const getUserID = (state = '', action) => {
    if (action.type === 'SET_USER_ID') {
        return action.payload
    }
    return state;
}
export const getLastLogin = (state = '', action) => {
    if (action.type === 'SET_USER_LAST_LOGIN') {
        return action.payload
    }
    return state;
}

export const getUserFullName = (state = '', action) => {
    if (action.type === 'SET_USER_FULL_NAME') {
        return action.payload
    }
    return state;
}

export const getUserLogin = (state = '', action) => {
    if (action.type === 'SET_USER_LOGIN') {
        return action.payload
    }
    return state;
}

export const getUserKYC = (state = '', action) => {
    if (action.type === 'SET_USER_KYC') {
        return action.payload
    }
    return state;
}