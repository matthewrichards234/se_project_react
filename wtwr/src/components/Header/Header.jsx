import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Images/wtwr-logo.svg";
import PFP from "../../assets/Images/user-pfp.svg"; // Hard coded pfp.
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Header = ({ handleOpenModal, handleCloseModal }) => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };

  const [isOpen, setIsOpen] = useState(false);

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
        // Click handler to trigger open modal
      >
        <ModalWithForm isOpen={activeModal === "add-clothes"} />+ Add clothes
      </button>
      <p className="header__user-name">Terrence Tegegne</p>
      <img src={PFP} alt="Profile Picture" className="header__user-pfp" />
    </div>
  );
};

export default Header;
