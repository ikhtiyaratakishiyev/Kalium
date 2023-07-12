import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import men from '../Assets/Image/men.png'

import './style.scss'

const Men = () => {
  return (
    <div>
          <div className='men-hero'>
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
        <img className='image' src={men} alt="" />
        <section>

        </section>
        <h1>Mens Collection</h1>
        <Footer/>
          </div>

    </div>
   
  )
}

export default Men