import React, { useEffect, useState } from "react";
import { AccelerometerGraph } from "../../Components/AccelerometerGraph/AccelerometerGraph";
import { GyroscopeGraph } from "../../Components/GyroscopeGraph/GyroscopeGraph";
import { MagnetometerGraph } from "../../Components/MagnetometerGraph/MagnetometerGraph";
import { TemperatureGraph } from "../../Components/TemperatureGraph/TemperatureGraph";
import { WetnessGraph } from "../../Components/WetnessGraph/WetnessGraph";
import "./MeasurementData.css";
import { BASE_URL } from "../../apiConfig";

export const MeasurementData = () => {
  const [data, setData] = useState([]);
  const [measurementName, setMeasurementName] = useState("");
  const [measurementId, setMeasurementId] = useState(window.location.href.split("/").pop());
  const transferData = (array) => {
    let data = {
      t: [],
      gx: [],
      gy: [],
      gz: [],
      ax: [],
      ay: [],
      az: [],
      mx: [],
      my: [],
      mz: [],
      temp: [],
      hum: [],
    };
    for (let i = 0; i < array.length; i++) {
      data["t"].push(array[i][0]);
      data["gx"].push(array[i][1]);
      data["gy"].push(array[i][2]);
      data["gz"].push(array[i][3]);
      data["ax"].push(array[i][4]);
      data["ay"].push(array[i][5]);
      data["az"].push(array[i][6]);
      data["mx"].push(array[i][7]);
      data["my"].push(array[i][8]);
      data["mz"].push(array[i][9]);
      data["temp"].push(array[i][10]);
      data["hum"].push(array[i][11]);
    }
    return data;
  };
  useEffect(() => {
    fetch(`${BASE_URL}/get_measurement_data/${measurementId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(transferData(data));
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/measurements/info/${measurementId}`)
      .then((response) => response.json())
      .then((data) => {
        setMeasurementName(data["measurement_name"]);
      });
  }, [measurementId]);

  

  return (
    <main className="app-main-data">
      <div className="data-grid">
        {data.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{measurementName} | {measurementId}</h1>
            <GyroscopeGraph
              data={data}
              className="div1"
            />
            <AccelerometerGraph data={data} className="div2" />
            <MagnetometerGraph data={data} className="div3" />
            <TemperatureGraph data={data} className="div4" />
            <WetnessGraph data={data} className="div5" />
          </div>
        )}
      </div>
    </main>
  );
};
