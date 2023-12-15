import { createSlice } from "@reduxjs/toolkit";

export const selectedRestaurantSlice = createSlice({
    name: 'selectedRestaurant',
    initialState: {
        selectedRestaurant: null
    },
    reducers: {
        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload;
        }
    }
})

export const { setSelectedRestaurant } = selectedRestaurantSlice.actions
export default selectedRestaurantSlice.reducer
