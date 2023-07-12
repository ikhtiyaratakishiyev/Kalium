import React from 'react'

import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import men from '../Assets/Image/men.png'

import './style.scss'

const Men = () => {
  return (
    <div>
          <div className='men-hero'>
        <Nav mode={"light"}/>
      
        <img className='image' src={men} alt="" />
        <section>

        </section>
        
        <Footer/>
          </div>

    </div>
   
  )
}

export default Men