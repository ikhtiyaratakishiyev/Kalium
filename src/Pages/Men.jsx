import React from 'react'

import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import men1 from '../Assets/Image/men1.png'
import { mens } from '../Data/products'
import {useNavigate} from 'react-router-dom'
import './style.scss'

const Men = () => {

  const navigate= useNavigate()
  
  const clickHandle = async(item)=>{
    
    const x = localStorage.setItem('productId',item.id)
    navigate('/menProduct')
  }

  return (
    <section className='products' >
          <div  className='men-hero'>
        <Nav mode={"light"}/>
      <div className="image">
      <img  src={men1} alt="" />
      </div>
      <section className='products-c'>
            <h2>Shopping for men</h2>
        <p>Shop jeans, shirts, jackets and more.</p>
            <div className="container">
          {mens.map((item) => {
            return (
              <div onClick={()=>clickHandle(item)}  key={item.id} className="card">
                <img src={item.img1} alt="" />
                <img  className="imgHover " src={item.img2} alt="" />
                <div className="txt">
                  <h2>{item.name}</h2>
                  <h2>{item.price}</h2>
                </div>
                <button>{item.category}</button>
              </div>
            );
          })}
        </div>
            </section> 
      
        
        <Footer/>
          </div>

    </section>
   
  )
}

export default Men