import './App.css'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import OrderList from './pages/OrderList'
import Rightbar from './components/layout/Rightbar'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'

function RootLayout() {
  const location = useLocation()
  const showRightbar = location.pathname === '/'

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      <div className="flex flex-1 min-h-screen">
        <aside className="flex-shrink-0"><Sidebar /></aside>
        <main className="flex-1 min-w-0 flex flex-col">
          <Navbar />
          <div className="flex-1 min-h-0">
            <Outlet />
          </div>
        </main>
        {showRightbar && (
          <aside className="flex-shrink-0"><Rightbar /></aside>
        )}
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'orderList', element: <OrderList /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
