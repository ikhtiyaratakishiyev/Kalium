import React from 'react'
import about from '../Assets/Image/about.jpg'
// import AboutNav from '../Components/AboutNav'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import './style.scss'
const AboutPage = () => {
  return (
    
<div>
  {/* <AboutNav/> */}
  <Nav/>
  <style>
  {`
    nav{
      logo{
        color:black
      }
    }
  `}
  </style>
  <div className="container">
    <img src={about} alt="" />
  <div className='context'>
    <div className="left">
    <p>
    We have a more interesting life if you wear impressive clothes. <br /> 
    Sometimes the simplest things are the  most profound. Attention <br />
     to detail is of utmost importance  when you want to look good.
    </p>

    <p>
    Design and style should work toward making you look good and <br />
     feel good without a lot of effort so you can get on with the things <br /> 
     that matter. War taught me that not everything is glamorous.
    </p>

    </div>
    <div className="right">
      <div className="days">
        <h4>Monday-Friday</h4>
        <h4>Saturday</h4>
        <h4>Sunday</h4>
      </div>
      <div className="time">
        <p>09:30 - 20:00</p>
        <p>11:00 - 18:00</p>
        <p>Closed</p>
      </div>
    </div>
  </div>
  </div>
  <div className="border"></div>
  <Footer/>
</div>
      
     
  
     

    
  )
}

export default AboutPage