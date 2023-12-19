import React from 'react'
import "./ContentSlide";
import { Outlet } from 'react-router-dom';

function List() {
  return (
    <div className='list-bar'>
    

    <div className="list">
        <div className="list-title">
            <div className="shape-list"></div>
            <div className="logo-list"><img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/></div>
            <div className="title-list">Station Name Dummy</div>
            </div>

            <ul className="total-sales-one">
                <li className='total-sales-item title'>Total Sales</li>
                <li className="total-sales-item number">62,721  m ³ </li>
                <li className="total-sales-item compressionState">Compression State</li>
                <li className="total-sales-item  compression">compression </li>
                <li className="total-sales-item max-Transacion">Max Transaction / hour </li>
                <li className="total-sales-item num">20 </li>

                
           
        </ul>
            <ul className="total-sales-one">
                <li className='total-sales-item title'>Total value</li>
                <li className="total-sales-item number">550 EGP </li>
                <li className="total-sales-item compressionState">Total Tracsacion Count</li>
                <li className="total-sales-item number numm">5161 </li>
                <li className="total-sales-item max-Transacion">Max Transaction Date-Time </li>
                <li className="total-sales-item date-time">8-1-2021 | 10:16 PM </li>
                
           
        </ul>

    </div>
    <div className="list">
        <div className="list-title">
            <div className="shape-list"></div>
            <div className="logo-list"><img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/></div>
            <div className="title-list">Station Name Dummy</div>
            </div>

            <ul className="total-sales-one">
                <li className='total-sales-item title'>Total Sales</li>
                <li className="total-sales-item number">62,721  m ³ </li>
                <li className="total-sales-item compressionState">Compression State</li>
                <li className="total-sales-item  compression">compression </li>
                <li className="total-sales-item max-Transacion">Max Transaction / hour </li>
                <li className="total-sales-item num">20 </li>

                
           
        </ul>
            <ul className="total-sales-one">
                <li className='total-sales-item title'>Total value</li>
                <li className="total-sales-item number">550 EGP </li>
                <li className="total-sales-item compressionState">Total Tracsacion Count</li>
                <li className="total-sales-item number numm">5161 </li>
                <li className="total-sales-item max-Transacion">Max Transaction Date-Time </li>
                <li className="total-sales-item date-time">8-1-2021 | 10:16 PM </li>
                
           
        </ul>

    </div>
    <div className="list">
        <div className="list-title">
            <div className="shape-list"></div>
            <div className="logo-list"><img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/></div>
            <div className="title-list">Station Name Dummy</div>
            </div>

            <ul className="total-sales-one">
                <li className='total-sales-item title'>Total Sales</li>
                <li className="total-sales-item number">62,721  m ³ </li>
                <li className="total-sales-item compressionState">Compression State</li>
                <li className="total-sales-item  compression">compression </li>
                <li className="total-sales-item max-Transacion">Max Transaction / hour </li>
                <li className="total-sales-item num">20 </li>

                
           
        </ul>
            <ul className="total-sales-one">
                <li className='total-sales-item title'>Total value</li>
                <li className="total-sales-item number">550 EGP </li>
                <li className="total-sales-item compressionState">Total Tracsacion Count</li>
                <li className="total-sales-item number numm">5161 </li>
                <li className="total-sales-item max-Transacion">Max Transaction Date-Time </li>
                <li className="total-sales-item date-time">8-1-2021 | 10:16 PM </li>
                
           
        </ul>

    </div>
    {/* <div className="list">
        <div className="list-title">
            <div className="shape-list"></div>
            <div className="logo-list"><img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/></div>
            <div className="title-list">Station Name Dummy</div>
            </div>

            <div className="total-sales-one">
                <p className='total-sales-item title'>Total Sales</p>
                <p className="total-sales-item number">62,721  m ³ </p>
                <p className="total-sales-item compressionState">Compression State</p>
                <p className="total-sales-item number compression">compression </p>
                <p className="total-sales-item max-Transacion">Max Transaction / hour </p>
                <p className="total-sales-item num">20 </p>

                
           
        </div>
            <div className="total-sales-one">
                <p className='total-sales-item value'>Total value</p>
                <p className="total-sales-item Price">550 EGP </p>
                <p className="total-sales-item total-tran">Total Tracsacion Count</p>
                <p className="total-sales-item number numm">5161 </p>
                <p className="total-sales-item max-Transacion">Max Transaction Date-Time </p>
                <p className="total-sales-item date-time">8-1-2021 | 10:16 PM </p>

                
           
        </div>

    </div>
    <div className="list">
        <div className="list-title">
            <div className="shape-list"></div>
            <div className="logo-list"><img src="imges/gas-station-svgrepo-com.svg" alt="" className='img'/></div>
            <div className="title-list">Station Name Dummy</div>
            </div>

            <div className="total-sales-one">
                <p className='total-sales-item title'>Total Sales</p>
                <p className="total-sales-item number">62,721  m ³ </p>
                <p className="total-sales-item compressionState">Compression State</p>
                <p className="total-sales-item number compression">compression </p>
                <p className="total-sales-item max-Transacion">Max Transaction / hour </p>
                <p className="total-sales-item num">20 </p>

                
           
        </div>
            <div className="total-sales-one">
                <p className='total-sales-item value'>Total value</p>
                <p className="total-sales-item Price">550 EGP </p>
                <p className="total-sales-item total-tran">Total Tracsacion Count</p>
                <p className="total-sales-item number numm">5161 </p>
                <p className="total-sales-item max-Transacion">Max Transaction Date-Time </p>
                <p className="total-sales-item date-time">8-1-2021 | 10:16 PM </p>

                
           
        </div>

    </div> */}
        
    


    </div>
  )
}

export default List;
