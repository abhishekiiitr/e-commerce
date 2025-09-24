import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store/store'
import { setTheme } from './store/themeSlice'

export function ThemeWatcher() {
  const mode = useSelector((s: RootState) => s.theme.mode)
  const dispatch = useDispatch()

  useEffect(() => {
    // Initialize from localStorage on mount
  const saved = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
  if (saved) dispatch(setTheme(saved))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const effective = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode
    root.classList.toggle('dark', effective === 'dark')
    localStorage.setItem('theme', mode)
  }, [mode])

  return null
}
