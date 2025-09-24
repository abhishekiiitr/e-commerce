import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../store/themeSlice'
import { useIsDark } from '../../utils/theme'
import { getIconSrc } from '../../utils/assets'
import { ICON, FIELD } from '../../constants/ui'
import { toggleSidebar, toggleRightbar, toggleSidebarMobile, toggleRightbarMobile } from '../../store/layoutSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const isDark = useIsDark()

  const handleSidebarToggle = () => {
    // On desktop (md and above - 768px), toggle collapse state  
    // On mobile, toggle overlay state
    const isSidebarDesktop = window.innerWidth >= 768
    console.log('Sidebar toggle - Window width:', window.innerWidth, 'Desktop mode:', isSidebarDesktop)
    if (isSidebarDesktop) {
      dispatch(toggleSidebar())
    } else {
      dispatch(toggleSidebarMobile())
    }
  }

  const handleRightbarToggle = () => {
    // On desktop (lg and above - 1024px), toggle collapse state
    // On mobile, toggle overlay state  
    const isRightbarDesktop = window.innerWidth >= 1024
    console.log('Rightbar toggle - Window width:', window.innerWidth, 'Desktop mode:', isRightbarDesktop)
    if (isRightbarDesktop) {
      dispatch(toggleRightbar())
    } else {
      dispatch(toggleRightbarMobile())
    }
  }

  return (
    <div className="dark:bg-[#1c1c1c] dark:border-gray-700 px-[28px] py-[20px] border-b border-gray-200 text-[14px] flex justify-between items-center">
      <div className="flex items-center gap-x-[4px]">
        <button 
          onClick={handleSidebarToggle}
          className="p-[4px]"
        >
          <img src={getIconSrc('Sidebar', isDark)} className={ICON.md} />
        </button>
        <span className="p-[4px]">
          <img src={getIconSrc('Star', isDark)} className={ICON.md} />
        </span>
        <span className="dark:text-[#fff] p-[4px] opacity-40">Dashboards</span>
        <span className="dark:text-[#fff] p-[4px] opacity-40">/</span>
        <span className="dark:text-[#fff] p-[4px]">Default</span>
      </div>

      <div className="flex items-center gap-x-[4px]">
        <div className="p-[4px]">
          <div className={`${FIELD.paddingX} ${FIELD.paddingY} w-[180px] flex items-center justify-between ${FIELD.radius} transition-colors ${FIELD.bgLight} ${FIELD.borderLight} ${FIELD.bgDark} ${FIELD.borderDark}`}>
            <div className="flex items-center gap-x-[4px]">
              <span>
                <img src={getIconSrc('Search', isDark)} className={ICON.sm} />
              </span>
              <span className="text-[#1c1c1c]/40 dark:text-white/40">Search</span>
            </div>
            
          </div>
        </div>

        <div className="flex items-center">
          {[
            { icon: 'Sun.png', themeButton: true },
            { icon: 'ClockCounterClockwise.png' },
            { icon: 'Bell.png' },
            { icon: 'Sidebar.png', rightbarButton: true },
          ].map((currItem, index) => (
            <div key={index} className="gap-x-[4px] p-[4px]">
              <button onClick={() => {
                if (currItem.themeButton) {
                  dispatch(toggleTheme())
                } else if (currItem.rightbarButton) {
                  handleRightbarToggle()
                }
              }}>
                <img src={getIconSrc(currItem.icon, isDark)} className={ICON.md} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
