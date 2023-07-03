import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import women from '../Assets/Image/women.png'
import './style.scss'
const Women = () => {

  return (
    <div>
        
        <div className="women-hero">
        <Nav/>
     
            <img className='image' src={women} alt="" />
            <h1>LADIES</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Women