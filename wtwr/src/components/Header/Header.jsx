import React from "react";
import "./Header.css";
import Logo from "../../assets/Images/wtwr-logo.svg";
import PFP from "../../assets/Images/user-pfp.svg"; // Hard coded pfp.

const Header = () => {
  return (
    <div className="header">
      {/* Logo - Date -- space between -- Add clothes - Name - PFP */}
      {/* Header Logo */}
      <img src={Logo} alt="WTWR Logo" className="header__logo" />

      {/* Date & Location (I could make this seperate p tags between date & location) */}
      <p className="header__date-location">June 15, New York</p>

      {/* Add clothes Button */}
      {/* Note: the + symbol was not an icon I could download as SVG. */}
      <button className="header__add-clothes" type="button">
        + Add clothes
      </button>

      {/* User's Name. Should I make this a p tag? */}
      <p className="header__user-name">Terrence Tegegne</p>

      {/* User's PFP */}
      <img src={PFP} alt="Profile Picture" className="header__user-pfp" />
    </div>
  );
};

export default Header;
