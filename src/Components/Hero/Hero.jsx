import React from 'react'
import './Hero.css';

import hero_banner from '../Assests/hero_banner.jpg';

const Hero = () => {
  return (
    <div className='hero rounded-pill'>
      <div className="hero-left">
        <p>new</p>
        <p>collections</p>
        <p>for everyone</p>
        <div className='hero-latest-btn'>Latest Collection</div>
      </div>
      <div className="hero-right me-5">
        <img className='hero-image rounded-pill' src={hero_banner} alt="" />
      </div>
      
    </div>
  )
}
export default Hero
