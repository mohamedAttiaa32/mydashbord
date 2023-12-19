import React from 'react'
// import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function HourlySalse() {

  const data = [
    {
      subject: '24:00',
      A: 120,
      B: 110,
      C:11,
      fullMark: 150,
    },
    {
      subject: '02:00',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: '04:00',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: '06:00',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: '08:00',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: '10:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: '12:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: '14:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: '16:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: '18:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: '20:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
    {
      subject: '22:00',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%" >
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#009ACF" fill="#009ACF33" fillOpacity={0.8} />
        <Radar name="Mike" dataKey="B" stroke="#009ACF" fill="#009ACF" fillOpacity={0.3} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default HourlySalse;






