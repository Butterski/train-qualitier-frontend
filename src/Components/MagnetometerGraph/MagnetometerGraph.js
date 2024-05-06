import React from "react";
import { Line } from "react-chartjs-2";

export const MagnetometerGraph = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => `Sample ${index + 1}`),
    datasets: [
      {
        label: "X Axis",
        data: data.map((d) => d.x),
        borderColor: "rgb(255, 159, 64)",
        fill: false,
      }, // Orange
      {
        label: "Y Axis",
        data: data.map((d) => d.y),
        borderColor: "rgb(153, 102, 255)",
        fill: false,
      }, // Purple
      {
        label: "Z Axis",
        data: data.map((d) => d.z),
        borderColor: "rgb(255, 205, 86)",
        fill: false,
      }, // Yellow
    ],
  };

  return <Line data={chartData} />;
};
