import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                </div>
                <p>Collection</p>
                <p>For Everyone</p>
            </div>

            <Link style={{textDecoration: 'none'}} to='/mens' ><div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div></Link>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero