import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    'name': 'order',
    initialState: {
        type: null,
        time: null,
        name: null,
        phoneNumber: null,
        email: null,
        address: null
    },
    reducers: {
        createTakeoutOrder: (state) => {
            state.type = "TAKEOUT"
        },
        createDeliveryOrder: (state) => {
            state.type = "DELIVERY"
        },
        setOrderTime: (state, action) => {
            state.time = action.payload
        },
        setOrderName: (state, action) => {
            state.name = action.payload
        },
        setOrderPhoneNumber: (state, action) => {
            state.phoneNumber = action.payload
        },
        setOrderEmail: (state, action) => {
            state.email = action.payload
        },
        setOrderAddress: (state, action) => {
            state.address = action.payload
        }
    }
})

export const {createTakeoutOrder, createDeliveryOrder, setOrderTime, setOrderEmail, setOrderName, setOrderPhoneNumber, setOrderAddress} = orderSlice.actions
export default orderSlice.reducer