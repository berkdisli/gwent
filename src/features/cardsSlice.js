import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: "",
    reducers: {
        showCards: (state) => state,
    }
})

export const { showCards } = cardsSlice.actions
export default cardsSlice.reducer;