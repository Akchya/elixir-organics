import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Elixir logo.jpg'
import phone_icon from '../Assets/phone_icon.png'
import instgram_icon from '../Assets/instagram_icon.png'
import pinterrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <div className="footer-social-icon">
            <div className="footer-items-container">
                <a href="tel:+918431784878" target='blank'>
                    <img src={phone_icon} alt="" />
                </a>
            </div>
            <div className="footer-items-container">
                <a href="https://instagram.com/akxay.07" target='blank'>
                    <img src={instgram_icon} alt="" />
                </a>
            </div>
            <div className="footer-items-container">
                <a href="https://in.pinterest.com/cakshay201/" target='blank'>
                    <img src={pinterrest_icon} alt="" />
                </a>
            </div>
            <div className="footer-items-container">
                <a href="https://api.whatsapp.com/send?phone=918431784878" target='blank'>
                    <img src={whatsapp_icon} alt="" />
                </a>
            </div>
        </div>
        {/* <div className="footer-redirects">
            <div className='elixir-help-content'>
                <div className="elixir-help-item">
                    <a href="tel:+91431784878">
                    <GiRotaryPhone className="elixir-help-icon"/> (843) 178-4878
                    </a>
                </div>
                <div className="elixir-help-item">
                <a href="https://api.whatsapp.com/send?phone=918431784878" target='blank'>
                    <FaWhatsapp className="elixir-help-icon"/> Send Message
                </a>
                </div>
            </div>
        </div> */}
        <ul className="footer-links">
            <li>Company</li>
            <li>Produts</li>
            <li>Offeces</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2023 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer