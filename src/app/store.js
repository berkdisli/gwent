import { configureStore } from "@reduxjs/toolkit";
import {default as cardsReducer} from "../features/cardsSlice";

export const store = configureStore({
  reducer:{
    cards: cardsReducer
  }
})