import React from "react";
import { main } from "../../assets/index";
import "./Home.css";
const Home = () => {
  return (
    <section className='heroSection flex_container'>
      <div className="container">
        <div className="hero flex_container">
          <div className="info">
            <div className="hero_heading heading-font">
              <p>Biergut Premium Beer</p>
              <h1><span>Introducing</span> New Premium Flavors</h1>
            </div>
            <div className="hero_text normal-font">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequuntur ex, ullam doloremque tempore accusamus sequi illum maiores, sapiente recusandae, temporibus ea?</p>
            </div>
            <div className="hero_btn ">
              <button>Host a Party</button>
              <button>Restock Your Pub</button>
            </div>
          </div>
          <div className="hero_img">
            <img src={main} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
