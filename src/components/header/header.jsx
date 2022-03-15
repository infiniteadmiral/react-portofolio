import React from 'react'
import SOCIALHEADER from './socialheader'
import './header.css'
import CTA from './cta'
import RAIN from '../../assets/rain.png' 
function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ravin Lamichhane</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <SOCIALHEADER/>
        <div className='me'>
          <img src={RAIN} alt="ravin"></img>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
                </div>
    </header>
  )
}

export default header