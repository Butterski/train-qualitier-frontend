import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const WetnessGraph = ({ data }) => {
  const startTime = data['t'][0];
  const formattedData = data['t'].map((timestamp, index) => ({
    time: (timestamp - startTime).toFixed(0), 
    hum: data['hum'][index],
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
        <XAxis dataKey="time" label={{ value: 'Time (seconds)', position: 'insideBottomRight', offset: -10 }} />
        <YAxis label={{ value: 'Humidity (%)', angle: -90, position: 'insideLeft'}} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="hum" stroke="#00aaaa" dot={false} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};