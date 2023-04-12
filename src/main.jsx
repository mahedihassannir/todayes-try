import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"
import Main from './components/layout/Main'
import Home from './components/Home.jsx/Home'
import About from './components/About.jsx/About'
import Contact from './components/Contact.jsx/Contact'


let router = createBrowserRouter([
  {
    path: "",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "About",
        element: <About></About>
      },
      {
        path: "Contact",
        element: <Contact></Contact>
      },

    ]

  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
