
const ProfileReducer = (state = '', action) => {
    if (action.type === 'SET_PROFILE') {
        return action.payload
    }
    return state;
}

export default ProfileReducer