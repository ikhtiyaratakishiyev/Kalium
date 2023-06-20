import React from 'react'
import Nav from '../Components/Nav'
import { Helmet } from 'react-helmet'
import Background from '../Assets/Videos/Background.mp4'

import './style.scss'

const HomeFullScreenPage = () => {
  return (
      <div> 

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
 <div className="container">
        <Nav/>
 <div  className='fullScreenContainer'>  
 
      <video className='video' autoPlay muted loop >

           <source src={Background} type='video/mp4' />
  
      </video>

      
    </div>
   
    </div>

      </div>
   
   
  )
}

export default HomeFullScreenPage