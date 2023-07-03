import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

const Men = () => {
  return (
    <div className='men-container'>
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
        <h1>Mens Collection</h1>
        <Footer/>
    </div>
  )
}

export default Men