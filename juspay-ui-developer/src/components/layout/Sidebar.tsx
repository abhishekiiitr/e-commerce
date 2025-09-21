import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { useIsDark } from '../../utils/theme'
import { getIconSrc } from '../../utils/assets'
import { ICON } from '../../constants/ui'
import { setSidebarMobileOpen } from '../../store/layoutSlice'
import type { RootState } from '../../store/store'

type DashboardItem = { icon: string; name: string; active: boolean }
type PageItem = { name: string; icon: string; subItems?: { name: string }[] }

export default function Sidebar() {
  const isDark = useIsDark()
  const dispatch = useDispatch()
  const { sidebarCollapsed: isCollapsed, sidebarMobileOpen } = useSelector((state: RootState) => state.layout)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close mobile sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && sidebarMobileOpen) {
        dispatch(setSidebarMobileOpen(false))
      }
    }

    if (sidebarMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [sidebarMobileOpen, dispatch])

  return (
    <div>
      {/* Mobile Backdrop */}
      {sidebarMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" />
      )}
      
      {/* Sidebar */}
      <div 
        ref={sidebarRef}
        className={`
          dark:bg-[#1c1c1c] dark:text-[#fff] bg-white text-[#1c1c1c]
          p-4 text-[14px] border-r border-gray-200 dark:border-gray-700
          transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-[70px]' : 'w-[212px]'}
          ${sidebarMobileOpen 
            ? 'fixed left-0 top-0 h-full z-50 w-[212px]' 
            : 'hidden md:block'
          }
        `}
      >
        <div className="flex items-center gap-2">
          <img src={getIconSrc('ByeWind.png', isDark)} className={`${ICON.lg} ${isCollapsed ? 'w-6 h-6' : ''}`} />
          <div className={`${isCollapsed ? 'hidden' : 'block'}`}>ByeWind</div>
        </div>

        <div className="mt-4">
          {!isCollapsed && (
            <div className="flex gap-x-[8px] items-center px-[4px] py-[8px]">
              <button className="px-2 py-1 rounded-[6px] text-[#1c1c1c]/60 dark:text-white/60 hover:bg-[#eff4f9] dark:hover:bg-white/5 hover:text-[#1c1c1c] dark:hover:text-white transition-colors">Favorites</button>
              <button className="px-2 py-1 rounded-[6px] text-[#1c1c1c]/60 dark:text-white/60 hover:bg-[#eff4f9] dark:hover:bg-white/5 hover:text-[#1c1c1c] dark:hover:text-white transition-colors">Recently</button>
            </div>
          )}
          {!isCollapsed && (
            <div>
              <ul>
                <li className="py-[4px] px-[8px] flex items-center gap-x-2 opacity-50">
                  <img src={getIconSrc('FolderNotch.png', isDark)} className={ICON.sm} />
                  <span className="font-normal text-[#1c1c1c]/40 dark:text-white/40">Overview</span>
                </li>
                <li className="py-[4px] px-[8px] flex items-center gap-x-2 opacity-50">
                  <img src={getIconSrc('FolderNotch.png', isDark)} className={ICON.sm} />
                  <span className="font-normal text-[#1c1c1c]/40 dark:text-white/40">Projects</span>
                </li>
              </ul>
            </div>
          )}

          <div className="mt-4">
            <div className="flex gap-x-[8px] items-center px-[4px] py-[8px]">
              {!isCollapsed && <span className="text-[#1c1c1c]/40 dark:text-white/40 text-xs">Dashboards</span>}
            </div>
            <ul>
              {[
                { icon: 'IdentificationBadge.png', name: 'Default', active: true },
                { icon: 'ShoppingBagOpen.png', name: 'eCommerce', active: false },
                { icon: 'FolderNotch.png', name: 'Projects', active: false },
                { icon: 'BookOpen.png', name: 'Online Courses', active: false },
              ].map((currItem: DashboardItem, index: number) => (
                <li key={index} className={`py-[2px] px-[8px] flex items-center gap-x-2 relative ${currItem.active ? 'bg-[#f0f0f0] dark:bg-[#2a2a2a] rounded-r-[6px]' : 'rounded-[8px]'}`}>
                  {currItem.active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-[16px] bg-[#1c1c1c] dark:bg-white rounded-r-[2px]"></div>
                  )}
                  <img src={getIconSrc(currItem.icon, isDark)} className={ICON.sm} />
                  {!isCollapsed && <span className={currItem.active ? 'font-medium' : 'font-normal'}>{currItem.name}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex gap-x-[8px] items-center px-[4px] py-[8px]">
              {!isCollapsed && <span className="text-[#1c1c1c]/40 dark:text-white/40 text-xs">Pages</span>}
            </div>
            <ul>
              {[
                { name: 'User Profile', icon: 'IdentificationCard.png', subItems: [{ name: 'Overview' }, { name: 'Projects' }, { name: 'Campaigns' }, { name: 'Documents' }, { name: 'Followers' }] },
                { name: 'Account', icon: 'IdentificationBadge.png' },
                { name: 'Corporate', icon: 'UsersThree.png' },
                { name: 'Blog', icon: 'Notebook.png' },
                { name: 'Social', icon: 'ChatsTeardrop.png' },
              ].map((currItem: PageItem, index: number) => (
                <div key={index}>
                  <li className="py-[4px] px-[8px] flex items-center gap-x-2 cursor-pointer hover:bg-[#eff4f9] dark:hover:bg-white/5 rounded">
                    <img src={getIconSrc(currItem.icon, isDark)} className={ICON.sm} />
                    {!isCollapsed && <span className="font-normal">{currItem.name}</span>}
                  </li>
                  {currItem.subItems && !isCollapsed && (
                    <ul>
                      {[
                        { name: 'Overview' },
                        { name: 'Projects' },
                        { name: 'Campaigns' },
                        { name: 'Documents' },
                        { name: 'Followers' },
                      ].map((currSubItem, idx) => (
                        <li key={idx} className="pl-[64px] py-[4px]">
                          {currSubItem.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}