import React from 'react'

import './Team.css'

function Team () {
  return <section className='team'>
    <div className='card'>
      <div className='pic'></div>
      <div className='profile'>
        <h3 className='name'>Anusha Arun</h3>
        <p className='designation'>Chief Architect</p>
      </div>
    </div>
    <div className='card'>
      <div className='pic'></div>
      <div className='profile'>
        <h3 className='name'>Yoshitha V K</h3>
        <p className='designation'>Architect</p>
      </div>
    </div>
    <div className='card'>
      <div className='pic'></div>
      <div className='profile'>
        <h3 className='name'>Deepthi</h3>
        <p className='designation'>Architect</p>
      </div>
    </div>
  </section>
}

export default Team
