import ChatBotPage from '@/pages/ChatBotPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/chat', element: <ChatBotPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
])

export default router
