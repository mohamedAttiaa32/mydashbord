import React from 'react'
import './BarContent.scss'
function BarContent() {
  return (
    <div className='container-barContent'>
      <div className="card active">
        <p className="card-number">
          71,028 <span className='card-type'>EGP</span>
        </p>
        <p className="card-total">
          Total value
        </p>
        <p className="card-shape">
          <div className="shape"></div>
          <p className='shape-text'>2%</p>
        </p>
      </div>
      <div className="card">
        <p className="card-number">
         20,000<span className='card-type'>m ³</span>
        </p>
        <p className="card-total">
          Total sales
        </p>
        <p className="card-shape">
          <div className="shape-high"> </div>
          <p className='shape-text-high'>50 m ³</p>

        </p>
      </div>
      <div className="card">
        <p className="card-number">
          20,000 <span className='card-type'> m ³</span>
        </p>
        <p className="card-total">
          Avg sales
        </p>
        <p className="card-shape">
          <div className="shape"></div>
          <p className='shape-text'>50 m ³</p>
        </p>
      </div>
      <div className="card">
        <p className="card-number">
          1567 <span className='card-type'>EGP</span>
        </p>
        <p className="card-total">
          Total TracSaction Count
        </p>
        <p className="card-shape">
          <div className="shape-high"></div>
          <p className='shape-text-high'>20</p>
        </p>
      </div>
    </div>
  )
}

export default BarContent
