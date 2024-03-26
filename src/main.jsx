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
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listedBooks",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/pagesRead",
        element:<PagesRead></PagesRead>
      },
      {
        path:"/book/:bookId",
        element:<ViewDetail></ViewDetail>,
        loader:()=> fetch('../Books.json')
      }
    ]
 
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
