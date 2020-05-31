import React from 'react'

import './Contact.css'

function Contact () {
  const openFacebook = e => {
    e.preventDefault()
    window.open('https://www.facebook.com/DesignAtAtelier108/', '_blank')
  }
  const openInstagram = e => {
    e.preventDefault()
    window.open('https://www.instagram.com/atelier_108/', '_blank')
  }
  return <section className='contact'>
    <div className='social-network'>
      <a href='#' onClick={openFacebook}><i className="facebook fa fa-facebook-official" aria-hidden="true" /></a>
      <a href='#' onClick={openInstagram}><i className="instagram fa fa-instagram" aria-hidden="true"></i></a>
    </div>
    <i className='address-icon fa fa-address-card-o' aria-hidden="true"/>
    <p className='address'>#9, Santosh Vihar 1, 19th A Cross, Jakkur Main Road, Shakarnagar Post, Bangalore 560092</p>
    <i className='email-icon fa fa-envelope' aria-hidden="true"/>
    <p className='email'>anusha.a.arun@gmail.com</p>
    <i className='phone-icon fa fa-phone' aria-hidden="true"/>
    <p className='phone'>+91 96325 04400</p>
  </section>
}

export default Contact
