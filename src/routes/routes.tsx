import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  { path: '/', element: <div>Home</div> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
])

export default router
