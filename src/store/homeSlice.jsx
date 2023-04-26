import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: {},
    genres: {},
}

export const homeSlice  = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        getApiConfigurations: (state, action) => {
             state.url = action.payload;
        },

        getGeneres : (state, action) => {
             state.genres = action.payload;
        }
    }

})


export default homeSlice.reducer;
export const {getApiConfigurations, getGeneres} = homeSlice.actions;