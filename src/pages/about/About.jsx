import React from 'react'
import "./About.scss"
import Icon1 from "../../assets/icon1.png"
import Icon2 from "../../assets/icon2.png"
import Photo from "../../assets/Photo.png"
import { MdArrowCircleRight } from "react-icons/md";
import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function About() {

        useEffect(() => {
          AOS.init({
            duration: 1000,
            once: false, 
          });
        }, []);

  return (
    // <div>salom</div>
    <div className="about">
        <div className="container">
            <div className="about__image">
                <img src={Photo} alt="img" className='about__image-img' />
            </div>
            <div data-aos="fade-left" className="about__block">
                <h3 className="about__block-title">About Us</h3>
                <h2 className="about__block-subtitle">We Believe in Working
                Accredited Farmers
                </h2>
                <p className="about__block-text">Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="about__block-card">
                    <div className="about__block-mindiv">
                        <img src={Icon1} alt="icon" className='about__block-img'/>
                    </div>
                    <div className="about__block-blok">
                        <h3 className="about__block-mintitle">Organic Foods Only</h3>
                        <p className="about__block-subtext">Simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div className='about__block-card'>
                    <div className="about__block-mindiv">
                        <img src={Icon2} alt="icon" className='about__block-img'/>
                    </div>
                    <div className="about__block-blok">
                        <h3 className="about__block-mintitle">Quality Standards</h3>
                        <p className="about__block-subtext">Simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum
                        </p>
                    </div>
                </div>
                <div className="about__block-button">
                    <button>Shop Now <MdArrowCircleRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About