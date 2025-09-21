import React from 'react'
import { PieChart } from 'lucide-react'

interface PieChartProps {
  width?: string
  height?: string
  className?: string
}

export const DonutChart: React.FC<PieChartProps> = ({ 
  width = '120px', 
  height = '120px', 
  className = '' 
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full relative ${className}`}
      style={{ width, height }}
    >
      <PieChart size={60} className="text-gray-400" />
      <div className="absolute bottom-1 left-1 bg-black bg-opacity-80 px-2 py-1 text-white text-xs rounded">
        38.6%
      </div>
    </div>
  )
}

export default DonutChart