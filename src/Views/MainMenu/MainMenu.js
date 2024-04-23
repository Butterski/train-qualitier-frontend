import React from "react";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import AddchartIcon from "@mui/icons-material/Addchart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MainMenu.css";

export const MainMenu = () => {
  const navigate = useNavigate();
  const handleLinkClick = (buttonName) => {
    navigate("/" + buttonName);
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
        </div>
      </main>
    </>
  );
};
