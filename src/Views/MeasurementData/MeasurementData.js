import React, { useEffect, useState } from "react";
import { AccelerometerGraph } from "../../Components/AccelerometerGraph/AccelerometerGraph";
import { GyroscopeGraph } from "../../Components/GyroscopeGraph/GyroscopeGraph";
import { MagnetometerGraph } from "../../Components/MagnetometerGraph/MagnetometerGraph";
import { TemperatureGraph } from "../../Components/TemperatureGraph/TemperatureGraph";
import { WetnessGraph } from "../../Components/WetnessGraph/WetnessGraph";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./MeasurementData.css";
import { BASE_URL } from "../../apiConfig";

export const MeasurementData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/get_mocked_measurement`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data])

  const ziparrays = (jsondata) => {
    let keys = Object.keys(jsondata);
    let output = [];
    let length = jsondata[keys[0]].length;

    for (let index = 0; index < length; index++) {
      let obj = {};

      keys.forEach((key) => {
        obj[key] = jsondata[key][index];
      });

      output.push(obj);
    }

    return output;
  };

  return (
    <main className="app-main">
      <div className="data-grid">
        {data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <>
            <GyroscopeGraph data={ziparrays(data.gyro)} className="div1" />
            <AccelerometerGraph data={ziparrays(data.acceleration)} className="div2" />
            <MagnetometerGraph data={ziparrays(data.magnetometer)} className="div3" />
            <TemperatureGraph data={data.temperature.x} className="div4" />
            <WetnessGraph data={data.humidity.x} className="div5" />
          </>
        )}
      </div>
    </main>
  );
};
