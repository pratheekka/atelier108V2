import React from 'react'

import HousePlanBackground from '../components/HousePlanBackground'
import logo from '../images/atelier-logo-1980.png'

import './HomePage.css'

function HomePage () {
  return <section className="home-page">
    <div className='background'>
      <HousePlanBackground />
    </div>
    <div className='logo'>
      <img src={logo} alt='logo' />
    </div>
    <div className='tag-line'>
      <div>
        <div>We Help Build Your</div>
        <div>DREAMS</div>
      </div>
    </div>
    <div className='brief'>
      <p>A young and dynamic <span>ARCITECTURE</span>, <span>INTERIOR</span> and <span>FURNITURE DESIGN</span> studio.</p>
    </div>
  </section>
}

export default HomePage
