import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'

export function useIsDark() {
  const mode = useSelector((s: RootState) => s.theme.mode)
  return useMemo(() => {
    if (typeof window === 'undefined') return mode === 'dark'
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const effective = mode === 'system' ? (prefersDark ? 'dark' : 'light') : mode
    return effective === 'dark'
  }, [mode])
}
