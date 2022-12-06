import { configureStore, Store } from '@reduxjs/toolkit'
import characters from './features/characters/charactersSlice'

export const store = configureStore({
  reducer: {
    characters,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
