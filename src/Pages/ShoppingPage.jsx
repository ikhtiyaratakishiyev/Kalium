import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../Components/Nav'

const ShoppingPage = () => {

  return (

    <div>
      <Nav/>
      <Helmet>
      <style>
        {`
      
        nav>.container>ul>li{
          color:#000;
        }
        nav>.container>ul>svg{
          fill:#000;
        }
        nav>.container>ul>li>svg{
          fill:#000;
        }
        nav>.container>ul>li>a{
          color:#000;
        }
        nav>.container>ul>.hamburger>.bar{
          background:#000;
        }
        
        `}
      </style>
  </Helmet>
    </div>

  )
}

export default ShoppingPage