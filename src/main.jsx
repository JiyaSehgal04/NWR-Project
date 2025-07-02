import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Addnewuser from './Addnewuser.jsx'
import ApplicationForm from './Applicationform.jsx'
import ChangePassword from './ChangePassword.jsx'
import ListofUsers from './ListofUsers.jsx'
import UpdateProfile from './UpdateProfile.jsx'
import Usercredentials from './Usercredentials.jsx'
import PassApplication from './PassApplication.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      // {
      //   path:"/about",
      //   element:<About/>
      // },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/pass-applications",
        element: <PassApplication />
      },

      {
        path: "/admin/new-user",
        element: <Addnewuser />
      },
      {
        path: "/list-of-users",
        element: <ListofUsers />
      },
      {
        path: "/usercredentials",
        element: <Usercredentials />
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      },
      {
        path: "/change-password",
        element: <ChangePassword />
      },
      {
        path: "/pass-applications/application-form",
        element: <ApplicationForm />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
