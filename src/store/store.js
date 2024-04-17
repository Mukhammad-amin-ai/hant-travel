import { configureStore } from '@reduxjs/toolkit'
import languageSlice from "./language";


export const store = configureStore({
  reducer: {
    language: languageSlice,
  },
})