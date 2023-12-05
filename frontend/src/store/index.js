import authReducer from './authSlice'
import locationReducer from './locationSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        auth: authReducer,
        location: locationReducer
    },
})