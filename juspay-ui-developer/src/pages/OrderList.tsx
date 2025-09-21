import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useIsDark } from '../utils/theme'
import { orders as orderList } from '../constants/orders'
import type { OrderItem } from '../constants/orders'
import SearchInput from '../components/ui/SearchInput'
import Icon from '../components/ui/Icon'
import FilterDropdown from '../components/ui/FilterDropdown'
import type { RootState } from '../store/store'
import { toggleSortOrder, setCurrentPage } from '../store/filterSlice'

export default function OrderList() {
  const navigate = useNavigate()
  const isDark = useIsDark()
  const dispatch = useDispatch()
  const { status, sortBy, sortOrder, currentPage, itemsPerPage } = useSelector((state: RootState) => state.filter)
  
  const [filteredOrders, setFilteredOrders] = useState<OrderItem[]>(orderList)
  const [displayedOrders, setDisplayedOrders] = useState<OrderItem[]>(orderList)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState(false)

  useEffect(() => {
    let filtered = [...orderList]
    
    // Apply status filter
    if (status !== 'ALL') {
      filtered = filtered.filter(order => order.status === status)
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: string | number = a[sortBy as keyof OrderItem] as string
      let bValue: string | number = b[sortBy as keyof OrderItem] as string
      
      if (sortBy === 'date') {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
    
    setFilteredOrders(filtered)
    
    // Apply pagination
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedOrders(filtered.slice(startIndex, endIndex))
  }, [status, sortBy, sortOrder, currentPage, itemsPerPage])

  const handleSearchResults = (results: OrderItem[]) => {
    // Apply existing filters to search results
    let filtered = [...results]
    
    // Apply status filter
    if (status !== 'ALL') {
      filtered = filtered.filter(order => order.status === status)
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
      let aValue: string | number = a[sortBy as keyof OrderItem] as string
      let bValue: string | number = b[sortBy as keyof OrderItem] as string
      
      if (sortBy === 'date') {
        aValue = new Date(aValue).getTime()
        bValue = new Date(bValue).getTime()
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
    
    setFilteredOrders(filtered)
    
    // Apply pagination
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    setDisplayedOrders(filtered.slice(startIndex, endIndex))
  }

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage)

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set())
      setSelectAll(false)
    } else {
      const allOrderIds = new Set(displayedOrders.map(order => order.orderId))
      setSelectedRows(allOrderIds)
      setSelectAll(true)
    }
  }

  const handleRowSelect = (orderId: string) => {
    const newSelectedRows = new Set(selectedRows)
    if (newSelectedRows.has(orderId)) {
      newSelectedRows.delete(orderId)
      setSelectAll(false)
    } else {
      newSelectedRows.add(orderId)
      if (newSelectedRows.size === displayedOrders.length) {
        setSelectAll(true)
      }
    }
    setSelectedRows(newSelectedRows)
  }

  return (
    <div 
      className="p-3 md:p-6 min-h-screen"
      style={{ 
        backgroundColor: isDark ? '#1c1c1c' : '#ffffff'
      }}
    >
      <span
        className="text-sm font-medium py-1 underline cursor-pointer transition-colors"
        style={{ 
          color: isDark ? '#fff' : '#1c1c1c' 
        }}
        onClick={() => navigate('/')}
      >
        Go to Home
      </span>
      <div className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-2">Order List</div>

      {/* Table */}
      <div 
        className="mt-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        style={{ 
          backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : '#ffffff'
        }}
      >
        {/* Filter/Search Header */}
        <div 
          className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
          style={{ 
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : '#f9fafb'
          }}
        >
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Icon name="Plus" size={16} />
            </button>
            <FilterDropdown />
            <button 
              onClick={() => dispatch(toggleSortOrder())}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Icon name="ArrowUpDown" size={16} />
            </button>
          </div>
          
          <SearchInput
            data={orderList}
            searchFields={['orderId', 'userName', 'projectName', 'address']}
            placeholder="Search orders..."
            className="w-48"
            onSearchResults={handleSearchResults}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="w-4"></th>
                <th className="w-10 px-3 py-3">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    style={{ 
                      accentColor: isDark ? '#C6C7F8' : '#000000',
                      backgroundColor: isDark ? '#C6C7F8' : '#000000',
                      borderColor: isDark ? '#C6C7F8' : '#000000'
                    }}
                    className={`w-4 h-4 rounded transition-opacity ${selectedRows.size > 0 ? 'opacity-100' : 'opacity-0'}`}
                  />
                </th>
                {[
                  { th: 'Order ID' },
                  { th: 'User' },
                  { th: 'Project' },
                  { th: 'Address' },
                  { th: 'Date' },
                  { th: 'Status' },
                ].map((currItem, idx) => (
                  <th key={idx} className="text-start text-xs text-gray-500 dark:text-gray-400 font-normal px-3 py-3">
                    {currItem.th}
                  </th>
                ))}
                <th className="w-8"></th>
              </tr>
            </thead>
            <tbody>
              {displayedOrders.map((currItem, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700/50 text-xs font-normal group transition-colors">
                  <td className="px-3 py-3 rounded-tl-lg rounded-bl-lg"></td>
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(currItem.orderId)}
                      onChange={() => handleRowSelect(currItem.orderId)}
                      style={{ 
                        accentColor: isDark ? '#C6C7F8' : '#000000',
                        backgroundColor: isDark ? '#C6C7F8' : '#000000',
                        borderColor: isDark ? '#C6C7F8' : '#000000'
                      }}
                      className={`w-4 h-4 rounded transition-opacity ${selectedRows.has(currItem.orderId) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    />
                  </td>
                  <td className="px-3 py-3 font-medium text-gray-900 dark:text-gray-100">{currItem.orderId}</td>
                  <td className="px-3 py-3">
                    <span className="flex items-center gap-2">
                      <img src={currItem.userImage} className="w-6 h-6 rounded-full" alt={currItem.userName} />
                      <span className="text-gray-900 dark:text-gray-100">{currItem.userName}</span>
                    </span>
                  </td>
                  <td className="px-3 py-3 text-gray-600 dark:text-gray-300">{currItem.projectName}</td>
                  <td className="px-3 py-3 text-gray-600 dark:text-gray-300">{currItem.address}</td>
                  <td className="px-3 py-3">
                    <span className="flex items-center gap-2">
                      <Icon name="Calendar" size={14} className="text-gray-400 opacity-50" />
                      <span className="text-gray-600 dark:text-gray-300">{currItem.date}</span>
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <span
                      style={{
                        color: isDark && currItem.dark_status_color ? currItem.dark_status_color : currItem.status_color,
                        opacity: !isDark && currItem.status === 'REJECTED' ? 0.4 : 1,
                      }}
                      className="flex items-center gap-2"
                    >
                      <span
                        style={{
                          backgroundColor: isDark && currItem.dark_status_color ? currItem.dark_status_color : currItem.status_color,
                        }}
                        className="w-1.5 h-1.5 rounded-full"
                      />
                      <span className="text-xs">{currItem.status_text}</span>
                    </span>
                  </td>
                  <td className="px-3 py-3 rounded-tr-lg rounded-br-lg">
                    <Icon name="MoreVertical" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* pagination buttons */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredOrders.length)} to {Math.min(currentPage * itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => dispatch(setCurrentPage(Math.max(1, currentPage - 1)))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="ChevronLeft" size={16} />
          </button>
          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }).map((_, index) => {
              const pageNumber = index + 1
              return (
                <button
                  key={index}
                  onClick={() => dispatch(setCurrentPage(pageNumber))}
                  className={`w-8 h-8 flex items-center justify-center rounded text-xs transition-colors ${
                    pageNumber === currentPage 
                      ? 'bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-gray-100' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              )
            })}
          </div>
          <button 
            onClick={() => dispatch(setCurrentPage(Math.min(totalPages, currentPage + 1)))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="ChevronRight" size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
