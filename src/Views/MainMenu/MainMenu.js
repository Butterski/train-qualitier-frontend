import React, { useState } from "react";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddchartIcon from "@mui/icons-material/Addchart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContactlessIcon from "@mui/icons-material/Contactless";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { BASE_URL } from "../../apiConfig";
import "./MainMenu.css";

export const MainMenu = () => {
  const navigate = useNavigate();
  const handleLinkClick = (buttonName) => {
    navigate("/" + buttonName);
  };
  const [activeMeasurements, setActiveMeasurements] = useState({});
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActiveMeasurementsClick = () => {
    fetch(`${BASE_URL}/measurements/runnings`)
      .then((response) => response.json())
      .then((data) => {
        setActiveMeasurements(data);
        handleClickOpen(true);
      })
      .catch((error) => console.log(error));
  };
  const handleRunningMeasurementsClick = (id) => {
    navigate(`/measurement-view/${id}`);
  };

  return (
    <>
      <main className="app-main">
        <div className="link-wrapper">
          <Link
            className="link-block"
            onClick={() => handleLinkClick("measurement-view")}
          >
            <Card className="link-card" variant="outlined">
              <CardActionArea>
                <CardContent className="link-card-content">
                  <div>
                    <h2>New Measurement</h2>
                    <p>Initiate a new train quality assessment</p>
                  </div>
                  <AddchartIcon fontSize="large" />
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link className="link-block" onClick={handleActiveMeasurementsClick}>
            <Card className="link-card">
              <CardActionArea>
                <CardContent className="link-card-content">
                  <div>
                    <h2>View Active Measurements</h2>
                    <p>View measurements that are currently running</p>
                  </div>
                  <ContactlessIcon fontSize="large" />
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Link
            className="link-block"
            onClick={() => handleLinkClick("show-measurements")}
          >
            <Card className="link-card">
              <CardActionArea>
                <CardContent className="link-card-content">
                  <div>
                    <h2>View Past Measurements</h2>
                    <p>Review previously recorded measurements</p>
                  </div>
                  <AssessmentIcon fontSize="large" />
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Active Measurements</DialogTitle>
            <div className="active-measures-dialog">
              {Object.keys(activeMeasurements).length > 0 ? (
                Object.entries(activeMeasurements).map(([id, name]) => (
                  <div key={id}>
                    <p>
                      <div className="running-measurement-data">
                        <div className="running-measurements-idname">
                          <strong>{id} - </strong> {name}{" "}
                        </div>
                        <Link
                          variant="body2"
                          component="button"
                          onClick={() => handleRunningMeasurementsClick(id)}
                        >
                          Show
                        </Link>
                      </div>
                    </p>
                  </div>
                ))
              ) : (
                <div>
                  <p>No active measurements</p>
                </div>
              )}
            </div>
          </Dialog>
        </div>
      </main>
    </>
  );
};
