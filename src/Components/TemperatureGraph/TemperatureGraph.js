import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const TemperatureGraph = ({ data }) => {
  const startTime = data['t'][0];
  const formattedData = data['t'].map((timestamp, index) => ({
    time: (timestamp - startTime).toFixed(0),
    temperature: data['temp'][index],
  }));

  const hasData = formattedData.some(entry => entry.temperature != null);

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
        
        {hasData && <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft'}} />}
        
        <Tooltip />
        <Legend />
        
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" dot={false} activeDot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};