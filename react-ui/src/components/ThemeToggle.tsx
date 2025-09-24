import { useDispatch, useSelector } from 'react-redux'
import { Sun, Moon } from 'lucide-react'
import type { RootState } from '../store/store'
import { toggleTheme } from '../store/themeSlice'

export default function ThemeToggle() {
  const mode = useSelector((s: RootState) => s.theme.mode)
  const dispatch = useDispatch()
  const isDark = mode === 'dark'
  
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Moon size={18} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  )
}
