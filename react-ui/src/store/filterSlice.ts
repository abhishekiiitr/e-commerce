import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type SortOrder = 'asc' | 'desc'
export type FilterStatus = 'ALL' | 'IN_PROGRESS' | 'COMPLETE' | 'PENDING' | 'APPROVED' | 'REJECTED'

interface FilterState {
  status: FilterStatus
  sortBy: string
  sortOrder: SortOrder
  currentPage: number
  itemsPerPage: number
  dateRange: {
    start: string | null
    end: string | null
  }
}

const initialState: FilterState = {
  status: 'ALL',
  sortBy: 'date',
  sortOrder: 'desc',
  currentPage: 1,
  itemsPerPage: 10,
  dateRange: {
    start: null,
    end: null,
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<FilterStatus>) => {
      state.status = action.payload
      state.currentPage = 1 // Reset to first page when filter changes
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload
    },
    toggleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc'
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
      state.currentPage = 1 // Reset to first page when items per page changes
    },
    setDateRange: (state, action: PayloadAction<{ start: string | null; end: string | null }>) => {
      state.dateRange = action.payload
      state.currentPage = 1 // Reset to first page when filter changes
    },
    resetFilters: (state) => {
      Object.assign(state, initialState)
    },
  },
})

export const {
  setStatus,
  setSortBy,
  setSortOrder,
  toggleSortOrder,
  setCurrentPage,
  setItemsPerPage,
  setDateRange,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer