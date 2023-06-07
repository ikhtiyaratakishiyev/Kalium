import {createBrowserRouter} from 'react-router-dom'

import HomePage from "../Pages/HomePage"
import AboutPage from "../Pages/AboutPage"
import ContactPage from "../Pages/ContactPage"
import ShoppingPage from '../Pages/ShoppingPage'

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
    
])