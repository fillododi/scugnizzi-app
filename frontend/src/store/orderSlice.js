import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    'name': 'order',
    initialState: {
        type: null,
        time: null
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
        }
    }
})

export const {createTakeoutOrder, createDeliveryOrder, setOrderTime} = orderSlice.actions
export default orderSlice.reducer