import React from 'react'
import './Sub.scss'

import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function Sub() {

        useEffect(() => {
          AOS.init({
            duration: 1000,
            once: false, 
          });
        }, []);

  return (
    <div>
        <div className="sub">
            <div className="container">
                <div data-aos="fade-up" data-aos-duration="1000" className="sub-block">
                    <h2 className="sub-title">Subscribe to our Newsletter</h2>
                    <form className='sub-from'>
                        <input type="text" className='sub-input' placeholder='Your Email Address'/>
                        <button className='sub-btn'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Sub