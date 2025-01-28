import React from "react";
import "./Content.scss";
// import contentbg from "../../assets/bg.svg";
import image from "../../assets/image.svg";
import star from "../../assets/star.svg";

import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function Content() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="2000" className="content__wrapper">
          <p className="content__wrapper-text">Testimonial</p>
          <h1 className="content__wrapper-title">What Our Customer Saying?</h1>
          <img src={image} alt="" className="content__wrapper-img" />
          <div className="content__wrapper-star">
            <img src={star} alt="" className="content__wrapper-imgage" />
            <img src={star} alt="" className="content__wrapper-imgage" />
            <img src={star} alt="" className="content__wrapper-imgage" />
            <img src={star} alt="" className="content__wrapper-imgage" />
            <img src={star} alt="" className="content__wrapper-imgage" />
          </div>
          <p className="content__wrapper-desc">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h3 className="content__wrapper-subtext">Sara Taylor</h3>

          <ul className="content__wrapper__list">
            <li className="content__wrapper__list-item">
              <h1 className="content__wrapper__list-title">100%</h1>
              <p className="content__wrapper__list-text">Organick</p>
            </li>
            <li className="content__wrapper__list-item">
              <h1 className="content__wrapper__list-title">285</h1>
              <p className="content__wrapper__list-text">Active Product</p>
            </li>
            <li className="content__wrapper__list-item">
              <h1 className="content__wrapper__list-title">350+</h1>
              <p className="content__wrapper__list-text">Organic Orchads</p>
            </li>
            <li className="content__wrapper__list-item">
              <h1 className="content__wrapper__list-title">25+</h1>
              <p className="content__wrapper__list-text">Years of Farming</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
