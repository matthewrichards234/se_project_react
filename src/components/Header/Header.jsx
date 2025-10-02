import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Images/wtwr-logo.svg";
import PFP from "../../assets/Images/user-pfp.svg"; // Hard coded pfp.
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";

const Header = ({
  handleOpenModal,
  handleOpenLoginModal,
  handleOpenSignupModal,
  isLoggedIn,
}) => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };

  return (
    <div className="header">
      <NavLink to="/">
        <img src={Logo} alt="WTWR Logo" className="header__logo" />
      </NavLink>
      <p className="header__date-location">
        {date.toLocaleString("en-GB", options)}
        {", New York"}
      </p>
      <ToggleSwitch className="header__toggle-switch" />
      {isLoggedIn ? (
        <>
          <button
            className="header__add-clothes"
            type="button"
            onClick={handleOpenModal}
          >
            + Add clothes
          </button>
          <p className="header__user-name">Terrence Tegegne</p>
          <NavLink to="/profile">
            <img src={PFP} alt="Profile Picture" className="header__user-pfp" />
          </NavLink>
        </>
      ) : (
        <>
          <button
            type="button"
            className="header__login-btn"
            onClick={handleOpenSignupModal}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="header__login-btn"
            onClick={handleOpenLoginModal}
          >
            Login In
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
