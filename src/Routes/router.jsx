import {createBrowserRouter} from 'react-router-dom'

import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"

import Men from '../Pages/Men'
import Women from '../Pages/Women'
import WomenProductPage from '../Pages/WomenProductPage'
import ShopPage from '../Pages/Shop'
import TwoColumnsPage from '../Pages/TwoColumnsPage'
import ThreeColumnsPage from '../Pages/ThreeColumnsPage'
import MenProductPage from '../Pages/MenProductPage'
import OneProductPage from '../Pages/OneProductPage'
import HomeFullScreenPage from '../Pages/HomeFullScreenPage'
import HomeParallaxPage from '../Pages/HomeParallax'
import SimpleProduct from '../Pages/SimpleProduct'



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
        path:"/Shop",
        element: <ShopPage />,
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
            path:"/threecolumns",
            element: <ThreeColumnsPage/>,
          },
          {
            path:"/twocolumns",
            element: <TwoColumnsPage />,
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
            path:"/menProduct",
            element: <MenProductPage />,
          },
          {
            path:"/womenProduct",
            element: <WomenProductPage />,
          },
          {
            path:"/homeParallax",
            element: <HomeParallaxPage />,
          },
          {
            path:"/simpleProduct",
            element: <SimpleProduct />,
          },
         
          
])
 

