import React from "react";
import { AccelerometerGraph } from "../../Components/AccelerometerGraph/AccelerometerGraph";
import { GyroscopeGraph } from "../../Components/GyroscopeGraph/GyroscopeGraph";
import { MagnetometerGraph } from "../../Components/MagnetometerGraph/MagnetometerGraph";
import { TemperatureGraph } from "../../Components/TemperatureGraph/TemperatureGraph";
import { WetnessGraph } from "../../Components/WetnessGraph/WetnessGraph";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './MeasurementData.css'

export const MeasurementData = () => {
  const sensorMockData = {
    gyroscope: [
      { x: 0.01, y: 0.02, z: -0.01 },
      { x: 0.02, y: 0.01, z: 0.0 },
      { x: -0.01, y: 0.03, z: 0.02 },
      { x: 0.0, y: -0.02, z: 0.01 },
    ],
    accelerometer: [
      { x: 9.81, y: 0.02, z: 0.03 },
      { x: 9.83, y: 0.0, z: 0.01 },
      { x: 9.79, y: 0.01, z: 0.04 },
      { x: 9.8, y: -0.02, z: 0.01 },
    ],
    magnetometer: [
      { x: 0.4, y: 0.6, z: 0.8 },
      { x: 0.43, y: 0.62, z: 0.85 },
      { x: 0.41, y: 0.59, z: 0.82 },
      { x: 0.42, y: 0.61, z: 0.83 },
    ],
    temperature: [25.5, 26.0, 24.8, 25.2],
    wetness: [40, 42, 45, 43],
  };
  return (
    <main className="app-main">
      <div className="data-grid">
        <GyroscopeGraph data={sensorMockData.gyroscope} className="div1"/>
        <AccelerometerGraph data={sensorMockData.accelerometer} className="div2"/>
        <MagnetometerGraph data={sensorMockData.magnetometer} className="div3"/>
        <TemperatureGraph data={sensorMockData.temperature} className="div4"/>
        <WetnessGraph data={sensorMockData.wetness} className="div5"/>
      </div>
    </main>
  );
};
