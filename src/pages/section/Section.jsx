import React from 'react'
import "./Section.scss"
import { HiArrowCircleRight } from "react-icons/hi";

function Section() {
  return (
    <section>
        <main className="main">
            <div className="container">
                <div className="main__card">
                    <p className="main__card-text">100% Natural Food</p>
                    <h2 className="main__card-title">Choose the best healthier way<br/> of life</h2>
                    <button className="main__card-btn">Explore Now <HiArrowCircleRight/></button>
                </div>
            </div>
        </main>
        <div className="get">
            <div className="container">
                <div className="get__Natural">
                    <p className="get__Natural-text">Natural!!</p>
                    <h3 className="get__Natural-title">Get Garden Fresh Fruits</h3>
                </div>
                <div className="get__Offer">
                    <p className="get__Offer-text">Offer!!</p>
                    <h3 className="get__Offer-title">Get 10% off on Vegetables</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section