import React from 'react';
import Login from "./Login";
import Browser from './Browser';
import Header from './Header'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
const body = () => {
    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },{
        path:"/browser",
        element:<Browser/>,
        }
    ])
      return (

    <div>
      
        <RouterProvider router={approuter}/>
        
    </div>
  )
}

export default body