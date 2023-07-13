import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import women1 from '../Assets/Image/women1.png'
import {women} from '../Data/products'
import {useNavigate} from 'react-router-dom'
import './style.scss'
const Women = () => {

  const navigate= useNavigate()
  
  const clickHandle = async(item)=>{
    
    const x = localStorage.setItem('productId',item.id)
    navigate('/womenProduct')
  } 

  return (
    <div>
        
        <div className="women-hero">
        <Nav/>
     
            <img className='image' src={women1} alt="" />
            
            <section className='products-c'>
            <h2>Shopping for women</h2>
        <p>Shop jeans, shirts, jackets and more.</p>
            <div className="container">
          {women.map((item) => {
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
            <div className="border"></div>
            <Footer/>
           
        </div>
       
    </div>
  )
}

export default Women