import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeState {
	mode: Theme
}

const initialState: ThemeState = {
	mode: 'system',
}

const slice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme(state, action: PayloadAction<Theme>) {
			state.mode = action.payload
		},
		toggleTheme(state) {
			state.mode = state.mode === 'dark' ? 'light' : 'dark'
		},
	},
})

export const { setTheme, toggleTheme } = slice.actions
export default slice.reducer
