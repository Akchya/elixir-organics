import React from 'react'
import './CSS/About.css'
import left_img from '../Components/Assets/Left.jpeg'
import right_img from '../Components/Assets/Right.jpeg'
import center_img from '../Components/Assets/Center.jpeg'

const About = () => {
  return (
    <>
        <section>
            <div className="about-main">
                <div className="layout-row">
                    <h1>What We Offer</h1>
                    <div className="left-container">
                        <img src={left_img} alt="" />
                    </div>
                    <div className="right-container">
                        <img src={right_img} alt="" />
                    </div>
                    <div className="center-container">
                        <img src={center_img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About