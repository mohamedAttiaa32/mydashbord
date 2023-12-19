import React from 'react'
import './ContentSlide';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Graph() {
  const data = [
    {
      name: 'sales 1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'sales 2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'sales 3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'sales 4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'sales 5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    
  ];
  return (


        <ResponsiveContainer width="100%" height="100%">
          <div className='container-graph' >
            <div className="graphBar">
              <div className="graphBarTilte">
              
                <h3 className='graphBarTiltee'>STATIONS ACTIVATES OVERVIEW</h3>

              </div>
              <ul className="graphBarlist">
                <li className='graphBarItem active'>SALES</li>
                <li className='graphBarItem'>TRANSACTION</li>
                <li className='graphBarItem'>VALUE</li>
                <li className='graphBarItem'>COMPRESSION</li>
              </ul>
            </div>

         
      <BarChart
        width={800}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="pv" fill="#FF7F5C" background={{ fill: 'transparent' }} />
      </BarChart>
      </div>
    </ResponsiveContainer>


  
     

  
 
  );
}

export default Graph
