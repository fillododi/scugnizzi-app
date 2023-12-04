import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoadingAuthData: true,
        userToken: null
    },
    reducers: {
        setUserToken: (state, action) => {
            state.userToken = action.payload;
        },
        setIsLoadingAuthData: (state, action) => {
            state.isLoadingAuthData = action.payload;
        }
    }
})

export const {setUserToken, setIsLoadingAuthData} = authSlice.actions
export default authSlice.reducer
