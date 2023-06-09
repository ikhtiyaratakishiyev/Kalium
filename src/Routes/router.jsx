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
import SidebarRightPage from '../Pages/SidebarRightPage'
import SidebarLeftPage from '../Pages/SidebarLeftPage'
import CatalogePage from '../Pages/CatalogePage'

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
          {
            path:"/sidebarleft",
            element: <SidebarLeftPage />,
          },
          {
            path:"/sidebarrigth",
            element: <SidebarRightPage />,
          },
          {
            path:"/cataloge",
            element: <CatalogePage />,
          },
    
])
 

