import React from 'react';
import { Line } from 'react-chartjs-2';

export const WetnessGraph = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Sample ${index + 1}`),
    datasets: [
      { label: 'Wetness (%)', data, borderColor: 'rgb(153, 102, 255)', fill: false },
    ],
  };

  return <Line data={chartData} />;
};