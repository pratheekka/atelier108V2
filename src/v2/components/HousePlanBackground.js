import React from 'react'
import housePlan from '../images/home-plan-1st-floor.jpg'
import './HousePlanBackground.css'

function HousePlanBackground () {
  return (
    <div className="layers">
      {/* <div className="layer shadow">
      </div> */}
      <div className="layer">
      </div>
      <div className="layer">
      </div>
      <div className="layer">
      </div>
      <div className="layer">
      </div>
      <div className='layer'>
        <img src={housePlan} alt='house-plan' />
      </div>
    </div>
  )
}

export default HousePlanBackground
