import React from 'react'
import "./NavBarContent.scss"
function NavBarContent() {
  return (
    <div className='container-NavBarContent'>
      <div className="texts">
        <div className="text">
            <div className="shape-one item-nav"></div>
            <div className="logo-one item-nav"><img src="imges/gas-station-svgrepo-com.svg" alt="" className='logo-img'/></div>
            <div className="text-num item-nav">2/3</div>
            <div className="text-Text item-nav">Monitored staions</div>
        </div>
        <div className="text">
        <div className="shape-two item-nav"></div>
            <div className="logo-2 item-nav"><i class="fa-solid fa-spinner spinner"></i></div>
            <div className="text-num item-nav">20s</div>
            <div className="text-Text item-nav">last update</div>
        </div>
      </div>
      <div className="days">
        <ul className='day-list'>
            <li className=' dayItem active-day'>Today</li>
            <li className='dayItem'>YesterDay</li>
            <li className='dayItem'>LastWeek</li>
        </ul>
      </div>
      <div className="inputs">

<div className='input-one'>
<input type="date" className='input' />

</div>
<div className="input-two"></div>

<input type="date" className='input' />
      </div>
      
    </div>
  )
}

export default NavBarContent
