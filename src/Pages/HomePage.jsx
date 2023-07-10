import React from "react";
import Footer from "../Components/Footer/index";
import Hero from "../Components/Hero";
import { products } from "../Data/products";
import {cards} from '../Data/products'
import {useNavigate} from 'react-router-dom'
import blog from '../Assets/Icons/blog.gif'




import './style.scss'

const HomePage = () => {

  const navigate= useNavigate()
  
  const clickHandle = async(item)=>{
    
    const x = localStorage.setItem('productId',item.id)
    navigate('/oneProduct')
  }

  return (
    <div className="wrapper">

     
      <Hero />
      <section className="products-c">
        <h2>New Arrivals</h2>
        <p>Latest from our Store</p>
        <div className="container">
          {products.map((item) => {
            return (
              <div onClick={()=>clickHandle(item)} key={item.id} className="card">
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
      
      <section className="Second-products-c">
         <h2>Latest News</h2>
        <p>News, press releases and multimedia</p>
        <div className="container">
          {cards.map((item)=>{
            return(
              <div className="second-card" key={item.id}>
                <div className="img-wrapper">
                  <div className="black">
                    <img src={blog} alt="" className="blog" />
                  </div>
                <img src={item.img} alt="" />
                </div>
              
               <div className="second-txt">
                <h3>{item.date}</h3>
                <h2>{item.description1}</h2>
                <h2>{item.description2}</h2>
               </div>
              </div>
            )
          })}
        </div>
      </section>

     <div className="black-area">
      <div className="text">
        <h2>Newsletter</h2>
        <p>Subscribe to our weekly newsletter.</p>
      </div>
      <div className="inpt">
        <input type="text" name="" id="" placeholder="Type your e-mail" />
        <button>Send</button>
      </div>
     </div>
      <Footer />
    </div>
  );
};

export default HomePage;
