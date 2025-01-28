import React from 'react'
import './Econ.scss'

import 'aos/dist/aos.css'; 
import AOS from 'aos'
import { useEffect } from 'react';

function Econ() {

        useEffect(() => {
            AOS.init({
                duration: 1000,
                once: false, 
            });
        }, []);

  return (
    <div>
        <div className="econ">
            <div className="container">
                <div data-aos="fade-left" className="econ__card">
                    <h3 className='econ__card-title'>Eco Friendly</h3>
                    <h2 className='econ__card-subtitle'>Econis is a Friendly Organic Store</h2>
                    <div className='econ__card-div'>
                        <h4 className='econ__card-mintitle'>Start with Our Company First</h4>
                        <p className="econ__card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat
                             accusantium doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>
                    <div className='econ__card-div'>
                        <h4 className='econ__card-mintitle'>Start with Our Company First</h4>
                        <p className="econ__card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat
                             accusantium doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>
                    <div className='econ__card-div'>
                        <h4 className='econ__card-mintitle'>Start with Our Company First</h4>
                        <p className="econ__card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptat
                             accusantium doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Econ