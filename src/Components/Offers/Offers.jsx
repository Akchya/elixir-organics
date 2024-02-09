import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_img.png'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>Only On Best Sellers Product</p>
        <Link to={'/mens'}><button>Check Now</button></Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  )
}

export default Offers