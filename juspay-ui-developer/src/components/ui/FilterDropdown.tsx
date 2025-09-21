import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Filter, ChevronDown } from 'lucide-react'
import { setStatus, type FilterStatus } from '../../store/filterSlice'
import type { RootState } from '../../store/store'

const statusOptions: { value: FilterStatus; label: string }[] = [
  { value: 'ALL', label: 'All Status' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'COMPLETE', label: 'Complete' },
  { value: 'PENDING', label: 'Pending' },
  { value: 'APPROVED', label: 'Approved' },
  { value: 'REJECTED', label: 'Rejected' },
]

export const FilterDropdown = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state: RootState) => state.filter)
  const [isOpen, setIsOpen] = useState(false)

  const handleStatusChange = (newStatus: FilterStatus) => {
    dispatch(setStatus(newStatus))
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 ease-in-out"
      >
        <Filter size={14} className="text-gray-400 opacity-50" />
        <ChevronDown 
          size={14} 
          className={`text-gray-400 opacity-50 transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleStatusChange(option.value)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ease-in-out first:rounded-t-lg last:rounded-b-lg ${
                option.value === status ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default FilterDropdown