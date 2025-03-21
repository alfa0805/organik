import React from "react";
import "./Toggle.scss";
import Stars from '../../assets/Stars.svg'
import Photo1 from '../../assets/Photo1.png'
import Photo2 from '../../assets/Photo2.png'
import Photo3 from '../../assets/Photo3.png'

import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function Toggle() {

     useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
        });
      }, []);

  return (
    <>
      <div className="toggle">
        <div data-aos="fade-up" data-aos-duration="2000" className="container">
          <p className="toggle-text">offer</p>
          <div className="toggle__box">
            <h1 className="toggle__box-title">We Offer Organic For You</h1>
            <button className="toggle__box-btn">
              View All Product
              <img src="" alt="" className="toggle__box-img" />
            </button>
          </div>
          <div className="toggle__cards">
                <div data-aos="zoom-in" className="toggle__cards-card">
                            <p>Vegetable</p>
                          <div className="toggle__cards-bgc">
                            <img src={Photo1} alt="" />
                          </div>
                          <h2>Calabrese Broccoli</h2>
                          <div className="toggle__cards-bottom">
                            <span>
                              <p>$20.00</p>
                              <h3>$11.00</h3>
                            </span>
                            <img src={Stars} alt="" />
                          </div>
                </div>
                <div data-aos="zoom-in" className="toggle__cards-card">
                            <p>Vegetable</p>
                          <div className="toggle__cards-bgc">
                            <img src={Photo3} alt="" />
                          </div>
                          <h2>Calabrese Broccoli</h2>
                          <div className="toggle__cards-bottom">
                            <span>
                              <p>$20.00</p>
                              <h3>$11.00</h3>
                            </span>
                            <img src={Stars} alt="" />
                          </div>
                </div>
                <div data-aos="zoom-in" className="toggle__cards-card">
                            <p>Vegetable</p>
                          <div className="toggle__cards-bgc">
                            <img src={Photo2} alt="" />
                          </div>
                          <h2>Calabrese Broccoli</h2>
                          <div className="toggle__cards-bottom">
                            <span>
                              <p>$20.00</p>
                              <h3>$11.00</h3>
                            </span>
                            <img src={Stars} alt="" />
                          </div>
                </div>
                <div data-aos="zoom-in" className="toggle__cards-card">
                            <p>Vegetable</p>
                          <div className="toggle__cards-bgc">
                            <img src={Photo1} alt="" />
                          </div>
                          <h2>Calabrese Broccoli</h2>
                          <div className="toggle__cards-bottom">
                            <span>
                              <p>$20.00</p>
                              <h3>$11.00</h3>
                            </span>
                            <img src={Stars} alt="" />
                          </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Toggle;
