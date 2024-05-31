import React from 'react'
import './Hero.css';

// import hand_icon from '../Assests/hand_icon.png';
// import arrow_icon from '../Assests/arrow_icon';
// import hero_image from '../Assests/arrow-icon';
import hero_banner from '../Assests/hero_banner.jpg';

const Hero = () => {
  return (
    <div className='hero rounded-pill'>
      <div className="hero-left">
        <h2 className='mt-5'>NEW ARIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
        </div>
      </div>
      <div className="hero-right me-5">
        <img className='hero-image rounded-pill' src={hero_banner} alt="" />
      </div>
      
    </div>
  )
}
export default Hero
