import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { BASE_URL } from "../../apiConfig";
import "./MeasurementView.css";

export const MeasurementView = () => {
  const { optional_measurement_id } = useParams();
  const [measurement_started, setMeasurementStarted] = useState(false);
  const [measurementName, setMeasurementName] = useState(
    "Put your measurement name here"
  );
  const [logs, setLogs] = useState("");
  const [measurementId, setMeasurementId] = useState(
    optional_measurement_id || ""
  );
  const logsRef = useRef();
  const addLog = (log) => {
    setLogs((prevLogs) => prevLogs + log + "\n");
  };

  const handleStartMeasurement = () => {
    if (!measurementId) {
      fetch(`${BASE_URL}/measurement/create/${measurementName}`)
        .then((response) => response.json())
        .then((data) => {
          const measurement_id = data["measurement_id"];
          setMeasurementId(measurement_id);
          startMeasurement(measurement_id);
        })
        .catch((error) => console.log(error));
    } else {
      startMeasurement(measurementId);
    }
  };

  const startMeasurement = (measurement_id) => {
    setMeasurementStarted(true);
    let response_msg = {};
    fetch(`${BASE_URL}/measurement/start/${measurement_id}`)
      .then((response) => response.json())
      .then((data) => {
        response_msg = data;
        addLog(data["message"]);
      })
      .catch((error) => console.log(error));
  };

  const handleStopMeasurement = () => {
    setMeasurementStarted(false);
    fetch(`${BASE_URL}/measurement/stop/${measurementId}`)
      .then((response) => response.json())
      .then((data) => addLog(data["message"]))
      .catch((error) => console.log(error));
  };

  const handlePauseMeasurement = () => {
    setMeasurementStarted(false);
    fetch(`${BASE_URL}/measurement/pause/${measurementId}`)
      .then((response) => response.json())
      .then((data) => addLog(data["message"]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    logsRef.current.scrollTop = logsRef.current.scrollHeight;
  }, [logs]);

  useEffect(() => {
    const interval = setInterval(() => {
      measurement_started &&
        fetch(`${BASE_URL}/get_measurement_log/${measurementId}`)
          .then((response) => response.json())
          .then((data) => {
            addLog(
              `${new Date(data[0][0]).toLocaleTimeString()}:${new Date(
                data[0][0]
              ).getMilliseconds()}, x: ${data[0][1]} y: ${data[0][2]} z: ${
                data[0][3]
              }, temperature: ${data[0][4]}, magnetometer: ${data[0][5]}`
            );
          })
          .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  }, [measurement_started]);

  useEffect(() => {
    if (optional_measurement_id) {
      fetch(`${BASE_URL}/measurements/is_running/${optional_measurement_id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data["is_running"]) {
            setMeasurementStarted(true);
            setMeasurementName(data["measurement_name"]);
            addLog(`Measurement ${optional_measurement_id} is already running`);
          }
        })
        .catch((error) => console.log(error));
    }
  }
  , [optional_measurement_id]);

  return (
    <main className="app-main">
      <Paper variant="outlined" className="measure-panel">
        <div className="measure-panel-top">
          <TextField
            id="outlined-basic"
            className="measure-id-input"
            label="ID"
            variant="standard"
            value={measurementId}
            inputProps={{ style: { fontSize: "2rem" } }}
            hiddenLabel
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-basic"
            className="measure-name-input"
            label="Measurement Name"
            variant="standard"
            inputProps={{ style: { fontSize: "2rem" } }}
            value={measurementName}
            onChange={(e) => setMeasurementName(e.target.value)}
            fullWidth
          />
        </div>
        <div className="measure-panel-bottom">
          <div className="measure-panel-bottom-left">
            <textarea
              value={logs}
              ref={logsRef}
              readOnly
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="measure-panel-bottom-right">
            <div className="measure-panel-bottom-right-top">
              <ButtonGroup orientation="vertical" variant="contained">
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  endIcon={<PlayCircleOutlineIcon />}
                  disabled={measurement_started}
                  onClick={handleStartMeasurement}
                >
                  Start
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                  endIcon={<PauseCircleIcon />}
                  disabled={!measurement_started}
                  onClick={handlePauseMeasurement}
                >
                  Pause
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  endIcon={<HighlightOffIcon />}
                  disabled={!measurement_started}
                  onClick={handleStopMeasurement}
                >
                  Stop
                </Button>
              </ButtonGroup>
            </div>
            <div className="measure-panel-bottom-right-bottom">
              <ButtonGroup orientation="vertical" variant="contained">
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  // disabled
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  // disabled
                >
                  Discard
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </Paper>
    </main>
  );
};
