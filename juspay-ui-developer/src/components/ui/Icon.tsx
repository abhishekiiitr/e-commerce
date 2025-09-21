import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  LineChart,
  Globe,
  PieChart,
  Users,
  ShoppingBag,
  Calendar,
  Search,
  Filter,
  ArrowUpDown,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  TrendingDown,
  BarChart3,
  LineChart,
  Globe,
  PieChart,
  Users,
  ShoppingBag,
  Calendar,
  Search,
  Filter,
  ArrowUpDown,
  Plus,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
}

interface IconProps {
  name: string
  size?: number
  className?: string
  color?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 16, className = '', color }) => {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return (
    <IconComponent 
      size={size} 
      className={className}
      color={color}
    />
  )
}

export default Icon