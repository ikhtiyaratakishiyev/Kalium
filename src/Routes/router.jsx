import {createBrowserRouter} from 'react-router-dom'

import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"
import ContactPage from "../Pages/ContactPage"
import ShoppingPage from '../Pages/ShoppingPage'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Shoes  from '../Pages/Shoes'
import Accessories from '../Pages/Accessories'
import TwoColumnsPage from '../Pages/TwoColumnsPage'
import ThreeColumnsPage from '../Pages/ThreeColumnsPage'
import FourColumnsPage from '../Pages/FourColumnsPage'
import CatalogePage from '../Pages/CatalogePage'
import EndlessRevealPage from '../Pages/EndlessRevealPage'
import NormalPage from '../Pages/NormalPage'
import ShowMorePage from '../Pages/ShowMorePage'
import CartIconPage from '../Pages/CartIconPage'
import BagIconPage from '../Pages/BagIconPage'
import BasketIconPage from '../Pages/BasketIconPage'
import OneProductPage from '../Pages/OneProductPage'
import HomeFullScreenPage from '../Pages/HomeFullScreenPage'
import HomeParallaxPage from '../Pages/HomeParallax'
import SimpleProduct from '../Pages/SimpleProduct'
import VariableProduct from '../Pages/VariableProduct'
import ExternalProduct from '../Pages/ExternalProduct'
import SidebarLeft from '../Pages/SidebarLeft'
import SidebarRight from '../Pages/SidebarRight'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
export const routes = createBrowserRouter([
    {

        path:"/",
        element: <HomePage/>,
      },
      {
        path:"/about",
        element: <AboutPage />,
      },
      {
        path:"/contact",
        element: <ContactPage />,
      },
      {
        path:"/shop",
        element: <ShoppingPage />,
      
      },

              {
            path:"/men",
            element: <Men />,
          },
          {
            path:"/women",
            element: <Women />,
          },
          {
            path:"/shoes",
            element: <Shoes />,
          },
          {
            path:"/accessories",
            element: <Accessories />,
          },
          {
            path:"/fourcolumns",
            element: <FourColumnsPage />,
          },
          {
            path:"/threecolumns",
            element: <ThreeColumnsPage/>,
          },
          {
            path:"/twocolumns",
            element: <TwoColumnsPage />,
          },
          // {
          //   path:"/sidebarleft",
          //   element: <SidebarLeft />,
          // },
          // {
          //   path:"/sidebarright",
          //   element: <SidebarRight />,
          // },
          {
            path:"/cataloge",
            element: <CatalogePage />,
          },
          {
            path:"/endless",
            element: <EndlessRevealPage />,
          },
          {
            path:"/normal",
            element: <NormalPage />,
          },
          {
            path:"/showmore",
            element: <ShowMorePage />,
          },
          {
            path:"/carticon",
            element: <CartIconPage />,
          },
          {
            path:"/bagicon",
            element: <BagIconPage />,
          },
          {
            path:"/basketicon",
            element: <BasketIconPage />,
          },
          {
            path:"/oneProduct",
            element: <OneProductPage />,
          },
          {
            path:"/homeFullScreen",
            element: <HomeFullScreenPage />,
          },
          {
            path:"/homeParallax",
            element: <HomeParallaxPage />,
          },
          {
            path:"/simpleProduct",
            element: <SimpleProduct />,
          },
          {
            path:"/variableProduct",
            element: <VariableProduct />,
          },
          {
            path:"/externalProduct",
            element: <ExternalProduct />,
          },
          {
            path:"/sidebarLeft",
            element: <SidebarLeft />,
          },
          {
            path:"/sidebarRight",
            element: <SidebarRight />,
          },
          {
            path:"/cart",
            element: <Cart />,
          },
          {
            path:"/checkout",
            element: <Checkout />,
          },
])
 

