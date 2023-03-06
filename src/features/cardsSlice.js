import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'card',
    initialState: "",
    reducers: {
        showCard: (state) => state,
    }
})

export const { showCard } = cardsSlice.actions
export default cardsSlice.reducer;