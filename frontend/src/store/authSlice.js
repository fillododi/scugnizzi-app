import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoadingAuthData: true,
        userToken: null
    },
    reducers: {
        setUserToken: (state, token) => {
            state.userToken = token;
        },
        setIsLoadingAuthData: (state, isLoadingAuthData) => {
            state.isLoadingAuthData = isLoadingAuthData;
        }
    }
})

export const {setUserToken, setIsLoadingAuthData} = authSlice.actions
export default authSlice.reducer
