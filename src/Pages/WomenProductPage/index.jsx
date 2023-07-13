
import React,{useEffect,useState} from 'react'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer/index'
import { women } from '../../Data/products'
import { Helmet } from 'react-helmet'

import './style.scss'



const WomenProductPage = () => {

    const [currentProduct ,setCurrentProduct]= useState({})
   
     const getData =async()=>{
   
       const productId = await localStorage.getItem("productId")
   
       const result =women.find(item=>item.id==productId)
   
      setCurrentProduct(result  );
     }
   
       useEffect(()=>{
         getData()
       },[])
   
     return (
       <div>
          <Helmet>
         <style>
           {`
         
           nav>.container>ul>li{
             color:#000;
           }
           nav>.container>ul>svg{
             fill:#000;
           }
           nav>.container>ul>li>svg{
             fill:#000;
           }
           nav>.container>ul>li>a{
             color:#000;
           }
           nav>.container>ul>.hamburger>.bar{
             background:#000;
           }
           
           `}
         </style>
     </Helmet>
   
           <Nav mode={'dark'}/>
         
            <div className="oneProductPage">
             <div className="imagesColumn">
               <img src={currentProduct.img1} alt="" />
              <img src={currentProduct.img2} alt="" />
               
             </div>
             <div className="product-txt-wrapper">
             <div className="product-txt">
             <h2>Studio Belt</h2>
             <p>This black t-shirt is constructed using fine 
               cotton poplin on the front panel for a refined,
                elegant finish and a contrasting textural 
                pique knit on the reverse for comfort and 
                detail. The fit is tailored, with both fabrics 
                adding elements of stretch for increased 
                comfort.
                </p>
                <ul>
                 <li>SKU:24</li>
                 <li>Categories: Men, Sweaters</li>
                 <li>Tags: gray, sweater</li>
                </ul>
                <h2>$7</h2>
                <div className="btns">
                 <input type="number" placeholder='0'/>
                 <button>Add to card</button>
                </div>
             </div>
             </div>
             
            </div>
             
            <Footer/>
       </div>
       
     )
         }

export default WomenProductPage