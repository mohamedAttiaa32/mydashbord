import React from 'react'
import './SalesByStation.scss'
function SalesByStation() {
  return (
    <div className='container-salesBy'>
      <div className="salesBy-title">
      <h3 className='salesBy-titlee'>Sales by Station</h3>

      </div>

      <div className="list-salesBy">
      <div className="list-contby">
        
        <div className="imgTilte-salesby">
        <img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/>
      <p className="list-contbyTitle">Station Name</p>
 

        </div>
        <div className="salesby-number">
        62,721m 3
        </div>

        
      
      
      </div>
      </div>
      <div className="list-salesBy">
      <div className="list-contby">
        <div className="imgTilte-salesby">
        <img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/>
      <p className="list-contbyTitle">Station Name</p>

        </div>
        
       
        <div className="salesby-number">
        62,721m 3
        </div>
        
      
      </div>
      </div>

      <div className="list-salesBy">
      <div className="list-contby">
        <div className="imgTilte-salesby">
        <img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/>
      <p className="list-contbyTitle">Station Name</p>

        </div>
        <div className="salesby-number">
        62,721m 3
        </div>
      
      </div>
      </div>

    </div>


  )
}

export default SalesByStation
