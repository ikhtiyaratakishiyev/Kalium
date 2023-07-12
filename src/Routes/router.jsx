import {createBrowserRouter} from 'react-router-dom'

import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"

import Men from '../Pages/Men'
import Women from '../Pages/Women'


import TwoColumnsPage from '../Pages/TwoColumnsPage'
import ThreeColumnsPage from '../Pages/ThreeColumnsPage'

import OneProductPage from '../Pages/OneProductPage'
import HomeFullScreenPage from '../Pages/HomeFullScreenPage'
import HomeParallaxPage from '../Pages/HomeParallax'
import SimpleProduct from '../Pages/SimpleProduct'


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
            path:"/homeParallax",
            element: <HomeParallaxPage />,
          },
          {
            path:"/simpleProduct",
            element: <SimpleProduct />,
          },
          {
            path:"/checkout",
            element: <Checkout />,
          },,
          
])
 

