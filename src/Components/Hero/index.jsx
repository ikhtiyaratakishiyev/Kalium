import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Nav from '../Nav/index'


import './style.scss'

const Hero = () => {

  const hero = useRef()

  useEffect(()=>{
      const slider = setInterval(()=>{
        hero.current.classList.toggle('changeImg')
    },10000)

    return ()=>{
      clearInterval(slider)
    }
  },[])



  const menuIcon = useRef(".hamburger");
  const sideNav = useRef(".sidenav");
  const MenuClicked = () => {
   
  

   
      menuIcon.current.classList.toggle("x");
      sideNav.current.classList.toggle("active");
    };




  return (
    <div ref={hero} className="hero">
     <Nav mode={"light"}/>
     
            
        <div className="hero-txt-first">
          <h1>Fall & Winter <br /> Coat Collection</h1> 
          <p>
            The lastest collection from the British brands. <br /> Pre-order now
            and get your order in December
          </p>
          <button id="bg-dark">Show More</button>
          <div className="monochrome">
                  <h2>MonoChrome <br /> Collection</h2>
          </div>
          
          <div className="btn">
            <button>Shop Now</button>
          </div>
        </div>
        
        
        
      


    </div>
  );
}

export default Hero