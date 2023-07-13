import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'
// import men from '../Assets/Image/men.png'
import women from '../Assets/Image/slidebar_2.png'

import './style.scss'
const HomeParallax = () => {
  return (
    <div className='parallax-wrapper'> 

      <div className='parallax-container'>
      <Nav/>

      <div className="parallax-man-img">

      <div className="img-container">
        {/* <img className='img' src={men} alt="" /> */}
      </div>

      <div className="txt-container2">
      <h1>Fall & Winter <br /> Coat Collection</h1> 
          <p>
            The lastest collection from the British brands. <br /> Pre-order now
            and get your order in December
          </p>
          <button id="bg-dark">Show More</button>
      </div>
      </div>
   
    
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

       <div className="second">
        <img src={women} alt="" />
       </div>
    </div>
  
  )
}

export default HomeParallax