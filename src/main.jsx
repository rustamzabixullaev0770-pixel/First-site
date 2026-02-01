import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Events from './pages/Events.jsx'
import Blog from './pages/Blog.jsx'
import Contacts from './pages/Contacts.jsx'
import LogIn from './pages/Log/LogIn.jsx'
import SignUp from './pages/Log/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/courses',
        element: <Courses />
      }, {
        path: '/events',
        element: <Events />
      }, {
        path: '/blog',
        element: <Blog />
      }, {
        path: '/contacts',
        element: <Contacts />
      }
    ]
  }, {
    path: '/login',
    element: <LogIn />
  }, {
    path: '/signup',
    element: <SignUp />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
