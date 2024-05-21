import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const GyroscopeGraph = ({ data }) => {
  const startTime = data['t'][0];
  const formattedData = data['t'].map((timestamp, index) => ({
    time: (timestamp - startTime).toFixed(0),
    gx: data['gx'][index],
    gy: data['gy'][index],
    gz: data['gz'][index],
  }));

  return (
    <ResponsiveContainer width="95%" height={400}>
      <LineChart
        data={formattedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" label={{ value: 'Time (seconds)', position: 'insideBottomRight', offset: -10 }}/>
        <YAxis label={{ value: 'Gyroscope rads/s', angle: -90, position: 'insideLeft'}} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="gx" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="gy" stroke="#82ca9d" dot={false}/>
        <Line type="monotone" dataKey="gz" stroke="#ffc658" dot={false}/>
      </LineChart>
    </ResponsiveContainer>
  );
};