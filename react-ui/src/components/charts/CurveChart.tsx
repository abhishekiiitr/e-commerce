import React from 'react'
import { LineChart } from 'lucide-react'

interface LineChartProps {
  width?: string
  height?: string
  className?: string
}

export const CurveChart: React.FC<LineChartProps> = ({ 
  width = '614px', 
  height = '232px', 
  className = '' 
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <LineChart size={48} className="mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-500 dark:text-gray-400">Revenue Chart</p>
      </div>
    </div>
  )
}

export default CurveChart