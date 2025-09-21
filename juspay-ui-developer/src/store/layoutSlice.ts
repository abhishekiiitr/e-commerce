import { createSlice } from '@reduxjs/toolkit'

interface LayoutState {
  sidebarCollapsed: boolean
  rightbarCollapsed: boolean
  sidebarMobileOpen: boolean
  rightbarMobileOpen: boolean
}

const initialState: LayoutState = {
  sidebarCollapsed: false,
  rightbarCollapsed: false,
  sidebarMobileOpen: false,
  rightbarMobileOpen: false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed
    },
    toggleRightbar: (state) => {
      state.rightbarCollapsed = !state.rightbarCollapsed
    },
    setSidebarCollapsed: (state, action) => {
      state.sidebarCollapsed = action.payload
    },
    setRightbarCollapsed: (state, action) => {
      state.rightbarCollapsed = action.payload
    },
    toggleSidebarMobile: (state) => {
      state.sidebarMobileOpen = !state.sidebarMobileOpen
    },
    toggleRightbarMobile: (state) => {
      state.rightbarMobileOpen = !state.rightbarMobileOpen
    },
    setSidebarMobileOpen: (state, action) => {
      state.sidebarMobileOpen = action.payload
    },
    setRightbarMobileOpen: (state, action) => {
      state.rightbarMobileOpen = action.payload
    },
  },
})

export const { 
  toggleSidebar, 
  toggleRightbar, 
  setSidebarCollapsed, 
  setRightbarCollapsed,
  toggleSidebarMobile,
  toggleRightbarMobile,
  setSidebarMobileOpen,
  setRightbarMobileOpen
} = layoutSlice.actions
export default layoutSlice.reducer