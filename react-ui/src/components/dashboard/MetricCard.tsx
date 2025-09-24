import React from 'react'
import { useIsDark } from '../../utils/theme'
import Icon from '../ui/Icon'
import { typography, borderRadius } from '../../constants/design'

interface MetricCardProps {
  cardName: string
  data1: string
  data2: string
  data2Icon: string
  bgColor: string
  darkBgColor?: string
  onClick?: () => void
}

export const MetricCard: React.FC<MetricCardProps> = ({
  cardName,
  data1,
  data2,
  data2Icon,
  bgColor,
  darkBgColor,
  onClick,
}) => {
  const isDark = useIsDark()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      // Default interaction - could show a detailed view
      console.log(`Viewing details for ${cardName}`)
    }
  }

  return (
    <div
      className={`p-6 ${borderRadius.xl} transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer active:scale-95 ${
        isDark && darkBgColor ? 'text-white' : 'text-gray-900'
      }`}
      style={{ 
        backgroundColor: isDark && darkBgColor ? darkBgColor : bgColor 
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      <div className={`${typography.sm} font-semibold mb-2 opacity-90`}>
        {cardName}
      </div>
      <div className="flex items-center justify-between">
        <div className={`${typography['2xl']} font-semibold`}>
          {data1}
        </div>
        <div className={`${typography.xs} flex items-center gap-1 transition-colors duration-300 ease-in-out`}>
          <span className={data2.startsWith('+') ? 'text-green-600' : 'text-red-500'}>
            {data2}
          </span>
          <Icon 
            name={data2Icon} 
            size={16} 
            className={`transition-transform duration-300 ease-in-out ${data2.startsWith('+') ? 'text-green-600' : 'text-red-500'}`} 
          />
        </div>
      </div>
    </div>
  )
}

export default MetricCard