import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const AccelerometerGraph = ({ data }) => {
  const startTime = data['t'][0];
  const formattedData = data['t'].map((timestamp, index) => ({
    time: (timestamp - startTime).toFixed(0),
    ax: data['ax'][index],
    ay: data['ay'][index],
    az: data['az'][index],
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
        <YAxis label={{ value: 'Accelerometer m/s^2', angle: -90, position: 'insideLeft'}} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="ax" stroke="#a884a8" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="ay" stroke="#a2caad" dot={false} />
        {/* <Line type="monotone" dataKey="az" stroke="#afc6a8" dot={false} /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};