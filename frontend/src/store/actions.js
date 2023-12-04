export const setUserToken = (token) => {
    return {
        type: 'SET_USER_TOKEN',
        payload: token
    }
}

export const setIsLoadingAuthData = (isLoading) => {
    return {
        type: 'SET_IS_LOADING_AUTH_DATA',
        payload: isLoading
    }
}