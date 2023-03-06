import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const DECK = {
    MONSTER: 'Monster',
    NILFGAARD: 'Nilfgaard',
    NORTHERN_REALMS: 'Northern Realms',
    SCOIATAEL: 'Scoiatael',
    SKELLIGE: 'Skellige',
    NEUTRAL: 'Neutral',
}

const initialState = {
    loading: false,
    error: '',
    cards: [],
    monster: [],
    nilfgaard: [],
    northernRealms: [],
    scoiatael: [],
    skellige: [],
    neutral: []
}

export const fetchCards = createAsyncThunk('cards/fetchCards', () => {
    return axios
    .get('https://api.gwent.one/?key=data&version=1.0.0.15')
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
            const allCards = Object.values(action.payload.response);
            
            state.loading = false;
            state.error = '';
            state.cards = allCards;

            state.monster = allCards.filter((card) => card.attributes.faction === DECK.MONSTER);
            state.nilfgaard = allCards.filter((card) => card.attributes.faction === DECK.NILFGAARD);
            state.northernRealms = allCards.filter((card) => card.attributes.faction === DECK.NORTHERN_REALMS);
            state.scoiatael = allCards.filter((card) => card.attributes.faction === DECK.SCOIATAEL);
            state.skellige = allCards.filter((card) => card.attributes.faction === DECK.SKELLIGE);
            state.neutral = allCards.filter((card) => card.attributes.faction === DECK.NEUTRAL);
        })
        builder.addCase(fetchCards.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.cards = [];
        })
    },
    reducers: {
        showCards: (state) => state,
    },
})

export const { showCards } = cardsSlice.actions
export default cardsSlice.reducer;