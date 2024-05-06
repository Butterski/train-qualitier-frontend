import React from "react";
import { Line } from "react-chartjs-2";

export const AccelerometerGraph = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Sample ${index + 1}`),
    datasets: [
      {
        label: "X Axis",
        data: data.map((d) => d.x),
        borderColor: "rgb(153, 102, 255)",
        fill: false,
      },
      {
        label: "Y Axis",
        data: data.map((d) => d.y),
        borderColor: "rgb(255, 205, 86)",
        fill: false,
      },
      {
        label: "Z Axis",
        data: data.map((d) => d.z),
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};
