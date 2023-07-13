import React from 'react'
import Nav from '../Components/Nav'
import { Helmet } from 'react-helmet'
const Shop = () => {
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
        <h1>Shop</h1>
    </div>
  )
}

export default Shop