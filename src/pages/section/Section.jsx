import React from 'react'
import "./Section.scss"
import { HiArrowCircleRight } from "react-icons/hi";
import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function Section() {

     useEffect(() => {
              AOS.init({
                  duration: 1000, 
                  once:false, 
              });
            }, []);

  return (
    <section>
        <main className="main">
            <div className="container">
                <div data-aos="fade-up" data-aos-duration="1000" className="main__card">
                    <p className="main__card-text">100% Natural Food</p>
                    <h2 className="main__card-title">Choose the best healthier way<br/> of life</h2>
                    <button className="main__card-btn">Explore Now <HiArrowCircleRight/></button>
                </div>
            </div>
        </main>
        <div className="get">
            <div className="container">
                <div data-aos="fade-right" className="get__Natural">
                    <p className="get__Natural-text">Natural!!</p>
                    <h3 className="get__Natural-title">Get Garden Fresh Fruits</h3>
                </div>
                <div data-aos="fade-left" className="get__Offer">
                    <p className="get__Offer-text">Offer!!</p>
                    <h3 className="get__Offer-title">Get 10% off on Vegetables</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section