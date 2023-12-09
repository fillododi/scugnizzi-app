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
        setPeopleAmount: (state, action) => {
            state.peopleAmount = action.payload
        },
        setBookingDay: (state, action) => {
            state.day = action.payload
        },
        setBookingTime: (state, action) => {
            state.time = action.payload
        },
        setBookingName: (state, action) => {
            state.name = action.payload
        },
        setBookingPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        setBookingEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

export const {setPeopleAmount, setBookingDay, setBookingTime, setBookingEmail, setBookingName, setBookingPhoneNumber} = bookingSlice.actions
export default bookingSlice.reducer