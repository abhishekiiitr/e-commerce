// Centralized asset helpers: resolve themed icon paths and list dark variants

const DARK_VARIANTS = new Set<string>([
  'sales-chart.png',
  'Add.png',
  'ArrowFall.png',
  'ArrowLineLeft.png',
  'ArrowLineRight.png',
  'ArrowRise.png',
  'ArrowsDownUp.png',
  'BarChart.png',
  'Bell.png',
  'BookOpen.png',
  'ChartPieSlice.png',
  'ChatsTeardrop.png',
  'ClockCounterClockwise.png',
  'CurvChart.png',
  'DotsThreeOutlineVertical.png',
  'FolderNotch.png',
  'FunnelSimple.png',
  'IdentificationBadge.png',
  'IdentificationCard.png',
  'Notebook.png',
  'Search.png',
  'ShoppingBagOpen.png',
  'Sidebar.png',
  'Star.png',
  'Sun.png',
  'UsersThree.png',
  'World Map.png',
])

function normalizeFilename(name: string) {
  // Allow callers to pass 'Search' or 'Search.png'
  return name.toLowerCase().endsWith('.png') ? name : `${name}.png`
}

export function getIconSrc(name: string, isDark: boolean) {
  const file = normalizeFilename(name)
  return isDark && DARK_VARIANTS.has(file) ? `dark/${file}` : file
}
