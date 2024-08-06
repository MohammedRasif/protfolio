import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots.jsx';
import ErrorPage from './component/Home/ErrorPage.jsx';
import Home from './component/Home/Home.jsx';
import About from './component/About.jsx';
import AllDetails from './component/Home/AllDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
      ,
      {
        path:"/about",
        element:<About></About>
      }
      ,
      
      
      {
        path:"/allDetails",
        element:<AllDetails></AllDetails>
      }
    ]

  }
]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
