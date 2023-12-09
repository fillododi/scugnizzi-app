import {createSlice} from "@reduxjs/toolkit";

export const selectedRestaurantSlice = createSlice({
    name: 'auth',
    initialState: {
        selectedRestaurant: null
    },
    reducers: {
        setSelectedRestaurant: (state, action) => {
            state.selectedRestaurant = action.payload;
        }
    }
})

export const {setSelectedRestaurant} = selectedRestaurantSlice.actions
export default selectedRestaurantSlice.reducer
