import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from 'lucide-react'
import { setSearchTerm, setSearchResults, setIsSearching } from '../../store/searchSlice'
import type { RootState } from '../../store/store'

interface SearchableItem {
  [key: string]: unknown
}

interface SearchInputProps<T extends SearchableItem> {
  data: T[]
  searchFields: string[]
  placeholder?: string
  className?: string
  onSearchResults?: (results: T[]) => void
}

export const SearchInput = <T extends SearchableItem>({
  data,
  searchFields,
  placeholder = 'Search...',
  className = '',
  onSearchResults,
}: SearchInputProps<T>) => {
  const dispatch = useDispatch()
  const { searchTerm, isSearching } = useSelector((state: RootState) => state.search)
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm)

  const performSearch = useCallback((term: string) => {
    if (!term.trim()) {
      dispatch(setSearchResults(data))
      onSearchResults?.(data)
      dispatch(setIsSearching(false))
      return
    }

    dispatch(setIsSearching(true))
    
    const filteredResults = data.filter((item: T) =>
      searchFields.some((field: string) => {
        const value = getNestedValue(item, field)
        return value?.toString().toLowerCase().includes(term.toLowerCase())
      })
    )

    dispatch(setSearchResults(filteredResults))
    onSearchResults?.(filteredResults)
    dispatch(setIsSearching(false))
  }, [data, searchFields, dispatch, onSearchResults])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchTerm(localSearchTerm))
      performSearch(localSearchTerm)
    }, 300) // Debounce search

    return () => clearTimeout(timeoutId)
  }, [localSearchTerm, dispatch, performSearch])

  const getNestedValue = (obj: SearchableItem, path: string): unknown => {
    return path.split('.').reduce((current: unknown, key: string) => {
      if (current && typeof current === 'object' && key in current) {
        return (current as Record<string, unknown>)[key]
      }
      return undefined
    }, obj)
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <Search 
          size={16} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 opacity-50"
        />
        <input
          type="text"
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 h-10 border border-gray-200 dark:border-gray-700 rounded-lg 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   placeholder-gray-400 dark:placeholder-gray-500"
        />
        {isSearching && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchInput