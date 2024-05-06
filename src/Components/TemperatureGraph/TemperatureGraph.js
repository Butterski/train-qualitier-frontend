import React from "react";
import { Line } from "react-chartjs-2";

export const TemperatureGraph = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Sample ${index + 1}`),
    datasets: [
      {
        label: "Temperature (°C)",
        data: data,
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: false,
      },
    ],
  };

  const options = { scales: { y: { beginAtZero: true } } };

  return <Line data={chartData} options={options} />;
};
