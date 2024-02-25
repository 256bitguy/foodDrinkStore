import React from 'react'
import { useRoutes } from "react-router-dom";
import Home from "./component/home/Home"
import Favourites from "./component/Favourites/Favourites"
import Cart from "./component/cart/Cart"
import Saved from "./component/saved/Saved"
import Checkout from "./component/checkout/Checkout"
function Routes() {
  return useRoutes(
   [
    {
      path:"/",
      element:<Home/>
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