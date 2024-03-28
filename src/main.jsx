import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Root from './componts/Root/Root';
import Home from './componts/Home/Home';
import ListedBooks from './componts/ListedBooks/ListedBooks';
import PagesRead from './componts/PagesRead/PagesRead';
import ViewDetail from './componts/ViewDetail/ViewDetail';
import ReadBooks from './componts/ReadBooks/ReadBooks';
import Wishted from './componts/Wishted/Wishted';
import Error from './componts/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
   errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element:<ListedBooks></ListedBooks>,
       
       children:[
        {
          index: true,
          // path:'read',
          element:<ReadBooks></ReadBooks>,
          loader: () => fetch('/Books.json'),
        },
        {
           
          path:'wish',
          element:<Wishted></Wishted>,
          loader: () => fetch('/Books.json'),
        }
       ]

      },
      {
        path:"/pagesRead",
        element:<PagesRead></PagesRead>,
        loader: () => fetch('/Books.json'),
      },
      {
        path:"/book/:bookId",
        element:<ViewDetail></ViewDetail>,
        loader:()=> fetch('../Books.json')
      },
     
    ]
 
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
