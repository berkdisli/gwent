import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: '',
    cards: [],
}

export const fetchCards = createAsyncThunk('card/fetchCards', () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.data)
})

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.loading = false;
            state.error = '';
            state.cards = action.payload;
        })
        builder.addCase(fetchCards.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.cards = [];
        })
    },
    reducers: {
        showCards: (state) => {
            console.log('state:', current(state));
            return state;
        },
    },
})

export const { showCards } = cardsSlice.actions
export default cardsSlice.reducer;