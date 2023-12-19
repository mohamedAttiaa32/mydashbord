import React from 'react'
import './ContentSlide.scss'
import { Link,Outlet } from 'react-router-dom'
import List from './List'
import Graph from './Graph'


function ContentSlide() {

  return (
    <>
    

     
   
    <div className='container-slide'>

    <div className="slide-bar">
        <div className='content-bar'>
        <i class="fa-solid fa-chart-column icon"></i>
        <button className='btn'><Link  to={'/statics'} className='link' >Graph</Link></button>
        </div>
<div className='content-bar'>     
<i class="fa-solid fa-list icon"></i>
        <button className='btn'><Link className='link' to={'/'} href="">List</Link></button>
        </div>

      </div>



    
      <Outlet/>
    </div>


</>
  )
}

export default ContentSlide;
