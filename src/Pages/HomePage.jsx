import React from "react";
import Footer from "../Components/Footer/index";

import Hero from "../Components/Hero";
import { products } from "../Data/products";
import "../../src/Components/Style/recet.scss";
const HomePage = () => {
  return (
    <div className="wrapper">
      <Hero />
      <section className="products-c">
        <h2>New Arrivals</h2>
        <p>Latest from our Store</p>
        <div className="container">
          {products.map((item) => {
            return (
              <div className="card">
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
      <Footer />
    </div>
  );
};

export default HomePage;
