import React from 'react'
import { BarChart3 } from 'lucide-react'

interface BarChartProps {
  width?: string
  height?: string
  className?: string
}

export const BarChart: React.FC<BarChartProps> = ({ 
  width = '384px', 
  height = '168px', 
  className = '' 
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <BarChart3 size={48} className="mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Projections vs Actuals Chart</p>
      </div>
    </div>
  )
}

export default BarChart