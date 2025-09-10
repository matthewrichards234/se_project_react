import React from "react";
import "./SideBar.css";
import PFP from "../../assets/Images/user-pfp.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={PFP} alt="PFP" className="sidebar__pfp" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </div>
  );
};

export default SideBar;
