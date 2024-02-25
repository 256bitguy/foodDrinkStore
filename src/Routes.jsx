import React from 'react'
import { useRoutes } from "react-router-dom";
import Home from "./component/home/Home"
import Favourites from "./component/Favourites/Favourites"
import Cart from "./component/cart/Cart"
import Saved from "./component/saved/Saved"
import Checkout from "./component/checkout/Checkout"
import SignUp from './auth/SignUp';
import Login from './auth/Login';
function Routes() {
  return useRoutes(
   [
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
  },
  {
      path:'/',
      element:<SignUp/>
  },
    {
      path:"/favourites",
      element:<Favourites/>
    },
    {
      path:"/checkout",
      element:<Checkout/>
    },
    {
      path:"/saved",
      element:<Saved/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
   ]
  )
}

export default Routes