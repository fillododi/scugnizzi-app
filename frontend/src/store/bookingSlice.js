import {createSlice} from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    'name': 'booking',
    initialState: {
        day: null,
        time: null,
        peopleAmount: null,
        name: null,
        phoneNumber: null,
        email: null
    },
    reducers: {
        createBooking: (state, action) => {
            state.day = action.payload.day
            state.time = action.payload.time
            state.peopleAmount = action.payload.peopleAmount
            state.name = action.payload.name
            state.phoneNumber = action.payload.phoneNumber
            state.email = action.payload.email
        },
        resetBooking: (state) => {
            state.day = null
            state.time = null
            state.peopleAmount = null
            state.name = null
            state.phoneNumber = null
            state.email = null
        }
    }
})

export const {createBooking, resetBooking} = bookingSlice.actions
export default bookingSlice.reducer