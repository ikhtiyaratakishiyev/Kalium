

import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useRef } from 'react'





import logo from "../../Assets/Icons/logo_black.png"

import {BiSearch} from 'react-icons/bi'
import {SlBag} from 'react-icons/sl'
import {BiChevronDown} from 'react-icons/bi'
import {RiArrowDropRightFill} from 'react-icons/ri'

import './style.scss'

const Nav = () => {



const hero = useRef()





const menuIcon = useRef(".hamburger");
const sideNav = useRef(".sidenav");
const MenuClicked = () => {
 


 
    menuIcon.current.classList.toggle("x");
    sideNav.current.classList.toggle("active");
  };




return (
  <div >
   
    <nav>
    <div className="container">
      <img src={logo} alt="" />
      <ul>

          <li>
            <Link to='/'>Home</Link>
            
          <BiChevronDown/>
          <div className="sub-link">
                  <div className="subsubLink">
                  <li>
                    <Link to='/HomePage'>Home Fullscreen</Link>
                    </li>
                  <li>Home Parallax</li>
                  </div>
              </div>
          </li>

          
          <li>
            Shop
            <BiChevronDown/>
            <div className="sub-link">
                  <div className="subsubLink">
                  <li>Women</li>
                  <li>Men </li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                  <li>
                      Variants
                      <RiArrowDropRightFill/>
                      </li>
                  <li>
                      Pagination
                      <RiArrowDropRightFill/>
                      </li>
                      <li>
                      Cart Icon
                      <RiArrowDropRightFill/>
                      </li>
                  </div>
              </div>
            </li>
          <li>
              Product
              <BiChevronDown/>
              <div className="sub-link">
                  <div className="subsubLink">
                  <li>Simple product</li>
                  <li>Variable Product</li>
                  <li>External Product</li>
                  <li>Grouped Product</li>
                  <li>Catalog Mode (No Price) </li>
                  <li>Image Layout</li>
                  <li>Image Size</li>
                  </div>
              </div>

          </li>
          <li>
            News
            <BiChevronDown/>
            <div className="sub-link">
                  <div className="subsubLink">
                  <li>Sidebar Right</li>
                  <li>Sidebar Left</li>
               
                  </div>
              </div>
            </li>
          <li>
            Pages
            <BiChevronDown/>
            <div className="sub-link">
                  <div className="subsubLink">
                  <li>
                    <Link to='/About'>About</Link>
                  </li>
                  <li>
                  <Link to='/Contact'>Contact</Link>
                  </li>
                  <li>Cart</li>
                  <li>Checkout</li>
                  <li>Login/Register</li>
                  </div>
              </div>
            </li>
          <li>Buy Now</li>
          <BiSearch/>
          <SlBag/>
          <div ref={menuIcon} onClick={MenuClicked} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </ul>
      <div ref={sideNav} className="sidenav">
          <li>Contact</li>
          <li>Products</li>
          <li> Category </li>
          <li>About</li>
      </div>
     </div>
    </nav>
          
      {/* <div className="hero-txt-first">
        <h1>Fall & Winter <br /> Coat Collection</h1> 
      
        
        
        <p>
          The lastest collection from the British brands. <br /> Pre-order now
          and get your order in December
        </p>
        <div className="monochrome">
                <h2>MonoChrome <br /> Collection</h2>
        </div>
        <button id="bg-dark">Show More</button>
        <div className="btn">
          <button>Shop Now</button>
        </div>
      </div> */}
      
      
      
    


  </div>
);
      }



export default Nav