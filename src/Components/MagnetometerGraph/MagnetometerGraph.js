import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const MagnetometerGraph = ({ data }) => {
  const startTime = data['t'][0];
  const formattedData = data['t'].map((timestamp, index) => ({
    time: (timestamp - startTime).toFixed(0),
    mx: data['mx'][index],
    my: data['my'][index],
    mz: data['mz'][index],
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
        <YAxis label={{ value: 'Magnetometer uT', angle: -90, position: 'insideLeft'}} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="mx" stroke="rgb(255, 159, 64)" dot={false} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="my" stroke="rgb(153, 102, 255)" dot={false} />
        <Line type="monotone" dataKey="mz" stroke="rgb(255, 205, 86)" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};