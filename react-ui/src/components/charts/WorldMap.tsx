import React from 'react'
import { Globe } from 'lucide-react'

interface WorldMapProps {
  width?: string
  height?: string
  className?: string
}

export const WorldMap: React.FC<WorldMapProps> = ({ 
  width = '154px', 
  height = '82px', 
  className = '' 
}) => {
  return (
    <div 
      className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg ${className}`}
      style={{ width, height }}
    >
      <Globe size={32} className="text-gray-400" />
    </div>
  )
}

export default WorldMap