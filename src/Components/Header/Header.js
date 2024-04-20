import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import IconButton from "@mui/material/IconButton";
import logo from "../../Assets/logo.png";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const handleLinkClick = (buttonName) => {
    navigate("/" + buttonName);
  };
  return (
    <header className="app-header">
      <Link underline="none" component="button" onClick={() => handleLinkClick("")}>
        <div className="app-header-left">
          <img src={logo} className="app-logo" alt="app-logo" />
          <h1>Train Qualitier</h1>
        </div>
      </Link>
      <div className="app-header-right">
        <IconButton aria-label="settings" size="large">
          <SettingsIcon fontSize="large" />
        </IconButton>
        <IconButton aria-label="settings" size="large">
          <HelpOutlineIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
};
