import React from 'react'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import { Helmet } from 'react-helmet'
const ExternalProduct = () => {
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
        <h1>ExternalProduct</h1>
        <Footer/>
    </div>
  )
}

export default ExternalProduct