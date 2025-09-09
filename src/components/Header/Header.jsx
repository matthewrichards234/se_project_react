import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Images/wtwr-logo.svg";
import PFP from "../../assets/Images/user-pfp.svg"; // Hard coded pfp.
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Routes, Route } from "react-router-dom";

const Header = ({ handleOpenModal }) => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };

  return (
    <div className="header">
      <img src={Logo} alt="WTWR Logo" className="header__logo" />
      <p className="header__date-location">
        {date.toLocaleString("en-GB", options)}
        {", New York"}
      </p>
      <ToggleSwitch className="header__toggle-switch" />
      <button
        className="header__add-clothes"
        type="button"
        onClick={handleOpenModal}
      >
        + Add clothes
      </button>
      <p className="header__user-name">Terrence Tegegne</p>
      <img src={PFP} alt="Profile Picture" className="header__user-pfp" />
    </div>
  );
};

export default Header;
