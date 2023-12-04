const initialState = {
    isLoadingAuthData: true,
    userToken: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_USER_TOKEN":
            return {
                ...state,
                userToken: action.payload
            }
        case "SET_IS_LOADING_AUTH_DATA":
            return {
                ...state,
                isLoadingAuthData: action.payload
            }
        default:
            return state
    }
}

export default rootReducer