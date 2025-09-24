import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface SearchableItem {
  [key: string]: unknown
}

interface SearchState {
  searchTerm: string
  searchResults: SearchableItem[]
  isSearching: boolean
}

const initialState: SearchState = {
  searchTerm: '',
  searchResults: [],
  isSearching: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
    setSearchResults: (state, action: PayloadAction<SearchableItem[]>) => {
      state.searchResults = action.payload
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload
    },
    clearSearch: (state) => {
      state.searchTerm = ''
      state.searchResults = []
      state.isSearching = false
    },
  },
})

export const { setSearchTerm, setSearchResults, setIsSearching, clearSearch } = searchSlice.actions
export default searchSlice.reducer