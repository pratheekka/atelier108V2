import React, { useState } from 'react'

import _1 from '../images/01.jpg'
import _2 from '../images/02.jpg'
import _3 from '../images/03.jpg'
import _4 from '../images/04.jpg'
import _5 from '../images/05.jpg'
import _6 from '../images/06.jpg'
import _7 from '../images/07.jpg'
import _8 from '../images/08.jpg'
import _9 from '../images/09.jpg'
import _10 from '../images/10.jpg'
import _11 from '../images/11.jpg'
import _12 from '../images/12.jpg'
import _13 from '../images/13.jpg'

import './Gallery.css'

function Gallery () {
  const [active, setactive] = useState(0)
  const gallery = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13]

  const onPrevClick = () => {
    if (active > 0) {
      setactive(active - 1)
    }
  }

  const onNextClick = () => {
    if (active < 12) {
      setactive(active + 1)
    }
  }

  return <section className='gallery'>
    <div className='carousel'>
      {
        gallery.map((img, i) => {
          if (active === i) {
            return <div key={i} className='carousel-item active'><img src={img} alt={i} /></div>
          } else {
            return <div key={i} className='carousel-item'><img src={img} alt={i} /></div>
          }
        })
      }
      <div className='carousel-prev' onClick={onPrevClick}></div>
      <div className='carousel-next' onClick={onNextClick}></div>
    </div>
  </section>
}

export default Gallery
