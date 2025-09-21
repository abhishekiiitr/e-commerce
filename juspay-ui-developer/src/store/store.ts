import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import searchReducer from './searchSlice'
import filterReducer from './filterSlice'
import layoutReducer from './layoutSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    filter: filterReducer,
    layout: layoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch