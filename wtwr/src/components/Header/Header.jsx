import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Images/wtwr-logo.svg";
import PFP from "../../assets/Images/user-pfp.svg"; // Hard coded pfp.
import ModalWithForm from "../ModalWithForm/ModalWithForm";

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
      <button
        className="header__add-clothes"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        + Add clothes
      </button>
      {/* Problems with this line */}
      {/* <ModalWithForm isOpen={handleOpenModal()} onClose={handleCloseModal()} /> */}
      <p className="header__user-name">Terrence Tegegne</p>
      <img src={PFP} alt="Profile Picture" className="header__user-pfp" />
    </div>
  );
};

export default Header;
