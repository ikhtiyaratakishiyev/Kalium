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
                    <Link to='/HomePage'>Home Fullscreen</Link>
                    </li>
                  <li>Home Parallax</li>
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
                  <li>
                    <Link to='/shoes'>Shoes</Link>
                  </li>
                  <li>
                  <Link to='/accessories'>Accessories</Link>
                  </li>
                  <li className='variants'>
                      Variants
                      <RiArrowDropRightFill/>
                      <div className="sub-link-right">
                  <div className="subsubLink-right">
                  <li>
                  <Link to='/twocolumns'>2 Columns</Link>
                  </li>
                  <li>
                    <Link to='/threecolumns'>3 Columns</Link>
                     </li>
                  <li>
                    <Link to='/fourcolumns'>4 Columns</Link>
                  </li>
                  <li>
                  <Link to='/sidebarleft'>Sidebar left</Link>
                  </li>
                  <li>
                  <Link to='/sidebarright'>Sidebar right</Link>
                  </li>
                  <li>
                  <Link to='/cataloge'>Cataloge Mode (No Price)</Link>
                  </li>
                
              
                  </div>
                      </div>
                      </li>
                  <li>
                      Pagination
                      <RiArrowDropRightFill/>
                      <div className="sub-link-right">
                  <div className="subsubLink-right">
                  <li>
                  <Link to='/endless'>Endless-Reveal</Link>
                  </li>
                  <li>
                    <Link to='/normal'>Normal</Link>
                     </li>
                  <li>
                    <Link to='/showmore'>Show More</Link>
                  </li>
                 
                
              
                  </div>
                      </div>
                      </li>
                      <li>
                      Cart Icon
                      <RiArrowDropRightFill/>
                      <div className="sub-link-right">
                  <div className="subsubLink-right">
                  <li>
                  <Link to='/carticon'>Cart Icon</Link>
                  </li>
                  <li>
                    <Link to='/bagicon'>Bag Icon</Link>
                     </li>
                  <li>
                    <Link to='/basketicon'>Basket Icon</Link>
                  </li>
                 
                
              
                  </div>
                      </div>
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

                  <li>
                    Image Layout
                    <RiArrowDropRightFill/>
                    <div className="sub-link-right">
                  <div className="subsubLink-right">
                  <li>
                  <Link to='/carticon'>Default</Link>
                  </li>
                  <li>
                    <Link to='/bagicon'>Plain</Link>
                     </li>
                  <li>
                    <Link to='/basketicon'>Plain Sticky</Link>
                  </li>
                  <li>
                  <Link to='/carticon'>Image left</Link>
                  </li>
                  <li>
                    <Link to='/bagicon'>Image right</Link>
                     </li>
                 
                
              
                  </div>
                      </div>
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
                  <li>
                    <Link to='/basketicon'>Large</Link>
                  </li>
                  <li>
                    <Link to='/basketicon'>Extra Large</Link>
                  </li>
                 
                 
                 
                
              
                  </div>
                      </div>
                    </li>
                 
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
          
    
      
      
      
    


  </div>
);
      }



export default Nav