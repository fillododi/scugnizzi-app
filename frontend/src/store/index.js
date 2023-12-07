import authReducer from './authSlice'
import locationReducer from './locationSlice'
import orderReducer from './orderSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        auth: authReducer,
        location: locationReducer,
        order: orderReducer
    },
})