import React from 'react'
import './Shop.scss'
import Stars from '../../assets/Stars.svg'
import Photo1 from '../../assets/Photo1.png'
import Photo2 from '../../assets/Photo2.png'
import Photo3 from '../../assets/Photo3.png'



function Shop() {
  return (
    <div>
      <div className="shop">
        <div className="container">
          <h3 className="shop-title">Categories </h3>
          <h2 className="shop-subtitle">Our Products</h2>
          <div className="shop__cards">
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo1} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo3} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo1} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo3} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo1} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
                <span>
                  <p>$20.00</p>
                  <h3>$11.00</h3>
                </span>
                <img src={Stars} alt="" />
              </div>
            </div>
            <div className="shop__cards-card">
                <p>Vegetable</p>
              <div className="shop__cards-bgc">
                <img src={Photo2} alt="" />
              </div>
              <h2>Calabrese Broccoli</h2>
              <div className="shop__cards-bottom">
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
    </div>
  )
}

export default Shop