import React from 'react'
import { createRoot } from 'react-dom/client'
import {    
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ShowProduct from './components/ShowProduct/ShowProduct';
import AddProduct from './components/addProduct/AddProduct';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';



  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShowProduct />,
    },
    {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct />,
      },
      
  ]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
