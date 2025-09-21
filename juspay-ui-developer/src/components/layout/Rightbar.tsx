import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { useIsDark } from '../../utils/theme'
import { getIconSrc } from '../../utils/assets'
import { ICON } from '../../constants/ui'
import { setRightbarMobileOpen } from '../../store/layoutSlice'
import type { RootState } from '../../store/store'

export default function Rightbar() {
  const isDark = useIsDark()
  const dispatch = useDispatch()
  const { rightbarCollapsed, rightbarMobileOpen } = useSelector((state: RootState) => state.layout)
  const rightbarRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close mobile rightbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rightbarRef.current && !rightbarRef.current.contains(event.target as Node) && rightbarMobileOpen) {
        dispatch(setRightbarMobileOpen(false))
      }
    }

    if (rightbarMobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [rightbarMobileOpen, dispatch])
  
  return (
    <div>
      {/* Mobile Backdrop */}
      {rightbarMobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}
      
      {/* Rightbar */}
      <div 
        ref={rightbarRef}
        className={`
          dark:bg-[#1c1c1c] dark:border-gray-700 
          p-[20px] border-l border-gray-200
          transition-all duration-500 ease-in-out transform overflow-hidden
          ${rightbarMobileOpen 
            ? 'fixed right-0 top-0 h-full z-50 translate-x-0 w-[280px]' 
            : 'hidden lg:block w-[280px]'
          }
          ${!rightbarMobileOpen && rightbarCollapsed ? 'lg:w-0 lg:p-0 lg:border-0' : !rightbarMobileOpen ? 'lg:w-[280px]' : ''}
        `}
      >
      {(!rightbarCollapsed || rightbarMobileOpen) && (
        <>
          <div>
            <div className="dark:text-[#fff] text-[14px] font-semibold">Notifications</div>
            <div className="flex flex-col gap-y-[8px] mt-[8px]">
            {[
              { notificationText: 'You have a bug that needs...', time: 'Just now', icon: 'BugBeetle.png' },
              { notificationText: 'New user registered', time: '59 minutes ago', icon: 'User.png' },
              { notificationText: 'You have a bug that needs...', time: '12 hours ago', icon: 'BugBeetle.png' },
              { notificationText: 'Andi Lane subscribed to you...', time: 'Today, 11:59 AM', icon: 'Broadcast.png' },
            ].map((currItem, index) => (
              <div key={index} className="flex gap-x-[8px] p-[4px] items-start">
                <div className="p-[4px] bg-[#e5ecf6] rounded-[8px]">
                  <img src={getIconSrc(currItem.icon, isDark)} className={ICON.lg} />
                </div>
                <div>
                  <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal">{currItem.notificationText}</div>
                  <div className="dark:text-[#fff] text-[12px] text-[#1c1c1c] opacity-40">{currItem.time}</div>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="mt-[24px]">
            <div className="dark:text-[#fff] text-[14px] font-semibold">Activities</div>
        {[
          { text: 'You have a bug that needs...', time: 'Just now', icon: '3D05.png' },
          { text: 'Released a new version', time: '59 minutes ago', icon: 'Female05.png' },
          { text: 'Submitted a bug', time: '12 hours ago', icon: '3D08.png' },
          { text: 'Modified A data in Page X', time: 'Today, 11:59 AM', icon: 'Male07.png' },
          { text: 'Deleted a page in Project X', time: 'Feb 2, 2023', icon: 'Male11.png' },
        ].map((currItem, index) => (
          <div key={index} className="flex gap-x-[8px] p-[4px] items-start">
            <div className="relative p-[4px] rounded-[8px]">
              <img src={getIconSrc(currItem.icon, isDark)} className={ICON.lg} />
              {index !== 4 && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-[1px] h-[14px] bg-gray-200 dark:bg-gray-700"></div>
              )}
            </div>
            <div>
              <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal">{currItem.text}</div>
              <div className="dark:text-[#fff] text-[12px] text-[#1c1c1c] opacity-40">{currItem.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[24px]">
        <div className="dark:text-[#fff] text-[14px] font-semibold">Contacts</div>
        {[
          { icon: 'Female15.png', name: 'Natali Craig' },
          { icon: 'Male08.png', name: 'Drew Cano' },
          { icon: 'Male06.png', name: 'Orlando Diggs' },
          { icon: 'Female08.png', name: 'Andi Lane' },
          { icon: 'Female09.png', name: 'Kate Morrison' },
          { icon: '3D03.png', name: 'Koray Okumus' },
        ].map((currItem, index) => (
          <div key={index} className="flex gap-x-[8px] p-[4px] items-start">
            <div className="relative p-[4px] rounded-[8px]">
              <img src={getIconSrc(currItem.icon, isDark)} className={ICON.lg} />
            </div>
            <div className="dark:text-[#fff] text-[14px] text-[#1c1c1c] font-normal">{currItem.name}</div>
          </div>
        ))}
      </div>
      </>
      )}
      </div>
    </div>
  )
}
