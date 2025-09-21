// Spacing and layout constants for pixel-perfect design
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '28px',
  '3xl': '32px',
} as const

// Typography constants
export const typography = {
  xs: 'text-xs', // 12px
  sm: 'text-sm', // 14px
  base: 'text-base', // 16px
  lg: 'text-lg', // 18px
  xl: 'text-xl', // 20px
  '2xl': 'text-2xl', // 24px
} as const

// Border radius constants
export const borderRadius = {
  sm: 'rounded-sm', // 2px
  md: 'rounded-md', // 6px
  lg: 'rounded-lg', // 8px
  xl: 'rounded-xl', // 12px
  '2xl': 'rounded-2xl', // 16px
} as const

// Color constants for consistency
export const colors = {
  primary: {
    bg: '#e3f5ff',
    text: '#1c1c1c',
  },
  secondary: {
    bg: '#f7f9fb',
    darkBg: 'rgba(255, 255, 255, 0.05)',
    text: '#1c1c1c',
    darkText: '#fff',
  },
  accent: {
    bg: '#e5ecf6',
  },
  text: {
    primary: '#1c1c1c',
    primaryDark: '#fff',
    secondary: 'rgba(28, 28, 28, 0.4)',
    secondaryDark: 'rgba(255, 255, 255, 0.4)',
  },
} as const