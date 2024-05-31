import React from 'react'
import './Footer.css'
// import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
import pinterest_icon from '../Assests/pinterest_icon.png'

const Footer = () => {
  return (
    <div className='footer rounded'>
      <div className="footer-logo">
        <img src="" alt="" />
        <p><u>shoPping</u></p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
            <img src={pinterest_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
