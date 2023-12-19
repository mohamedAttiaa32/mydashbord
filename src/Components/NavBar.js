import React from 'react'
import './NavBar.scss'

function NavBar() {
  return (
    <div className='nav-container'>

    <div className="nav-water">  <img src="imges/PMS.svg" alt="" className='nav-img__front'/></div>
    <div className="nav-logos">
        <div className="nav logo">   <img src="imges/control-room.svg" alt="" className='nav-img'/> </div>
        <div className="nav logo"><img src="imges/dashboard.png" alt="" className='nav-img'/></div>
        <div className="nav logo">  <img src="imges/elements.svg" alt="" className='nav-img element'/></div>
        <div className="nav logo">  <img src="imges/settings (1).svg" alt="" className='nav-img'  /></div>
        <div className="nav logo">  <img src="imges/notifications.svg" alt=""className='nav-img'/></div>
    </div>
    <div className="nav-logUots"><img src="imges/logout.svg" alt="" className=' nav-img__back' /></div>
    </div>
  )
}

export default NavBar
