import React, { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import Paper from "@mui/material/Paper";
import "./MeasurementView.css";

export const MeasurementView = () => {
  const [logs, setLogs] = useState("");
  const [measurementId, setMeasurementId] = useState(1);
  const logsRef = useRef(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(
        (prevLogs) => `${prevLogs}New log at ${new Date().toISOString()}\n`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logsRef.current.scrollTop = logsRef.current.scrollHeight;
  }, [logs]);

  return (
    <main className="app-main">
      <Paper variant="outlined" className="measure-panel">
        <div className="measure-panel-top">
          <TextField
            id="outlined-basic"
            className="measure-id-input"
            label="ID"
            variant="standard"
            defaultValue={measurementId}
            inputProps={{ style: { fontSize: "2rem" } }}
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
                >
                  Start
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  size="large"
                  endIcon={<PauseCircleIcon />}
                  // disabled
                >
                  Pause
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  endIcon={<HighlightOffIcon />}
                  // disabled
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
