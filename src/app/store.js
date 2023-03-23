import { configureStore } from "@reduxjs/toolkit";
import {default as cardsReducer} from "../features/cardsSlice";
import {default as playerReducer} from "../features/playerSlice";

export const store = configureStore({
  reducer:{
    cards: cardsReducer,
    player: playerReducer,
  }
})
