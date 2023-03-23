import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  player: 1,
  player1Deck: [],
  player2Deck: [],
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      return {
        ...state,
        player: action.payload,
      }
    },
    setPlayer1Deck: (state, action) => {
      return {
        ...state,
        player1Deck: action.payload,
      }
    },
    setPlayer2Deck: (state, action) => {
      return {
        ...state,
        player2Deck: action.payload,
      }
    },
  }
})

export const {setPlayer, setPlayer1Deck, setPlayer2Deck} = playerSlice.actions;

export const selectPlayer = (state) => state.player.player;
export const selectPlayer1Deck = (state) => state.player.player1Deck;
export const selectPlayer2Deck = (state) => state.player.player2Deck;

export default playerSlice.reducer;