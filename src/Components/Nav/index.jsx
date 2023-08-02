import React from 'react'
import { useEffect,useRef } from 'react'
import {Link} from 'react-router-dom'

import logo_white from '../../Assets/Icons/logo_white.png'
import logo_black from '../../Assets/Icons/logo_black.png'

import {BiSearch} from 'react-icons/bi'
import {SlBag} from 'react-icons/sl'
import {BiChevronDown} from 'react-icons/bi'
import {RiArrowDropRightFill} from 'react-icons/ri'

import './style.scss'

const Nav = ({mode}) => {

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
      <div className="logo">
        <Link to='/'>
        {
          mode==="light"
          ?
       <img  src={logo_white} alt="" />
       :
       <img  src={logo_black} alt="" />
        }
      
        </Link>
     
      
      </div>
    
      <ul>

          <li>
            <Link to='/'>Home</Link>
            
          <BiChevronDown/>
          <div className="sub-link">
                  <div className="subsubLink">
                     <li>
                    <Link to='/homeFullScreen'>Home Fullscreen</Link>
                    </li>
                  {/* <li>
                    
                    <Link to='/homeParallax'>Home Parallax</Link>
                    </li> */}
                  </div>
              </div>
          </li>

          
          <li>
          
            <Link to='/shop'>Shop </Link>            
            <BiChevronDown/>

            <div className="sub-link">
                  <div className="subsubLink">
                  <li>
                  <Link to='/women'>Women</Link>
                  </li>
                  <li>
                    <Link to='/men'>Men</Link>
                     </li>
                 
                 
                      
                  </div>
              </div>
            </li>
          <li>
              Product
              <BiChevronDown/>
              <div className="sub-link">
                  <div className="subsubLink">
                  <li>
                  <Link to='/SimpleProduct'> Simple product</Link>
                   
                    </li>
                

                 
                  <li>
                    Image Size
                    <RiArrowDropRightFill/>
                    <div className="sub-link-right">
                  <div className="subsubLink-right">

                  <li>
                  <Link to='/carticon'>Small</Link>
                  </li>
                  <li>
                    <Link to='/bagicon'>Medium</Link>
                     </li>
                        
                 
                 
                
              
                  </div>
                      </div>
                    </li>
                 
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
          
    
      
      
      
    


  </div>
);
      }



export default Nav