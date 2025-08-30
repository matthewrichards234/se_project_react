import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const [degrees, setDegrees] = useState("F");

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentUnitTemperatureContext
  );

  //   function handleChangeDegrees() {
  //     if (degrees === "F") {
  //       setDegrees("C");
  //     } else {
  //       setDegrees("F");
  //     }
  //     console.log(degrees);
  //   }

  return (
    <label className="toggle-switch">
      <input type="checkbox" onChange={handleToggleSwitchChange} />
      <span className="toggle-switch__slider"></span>
      <span className="toggle-switch__label-f">F</span>
      <span className="toggle-switch__label-c">C</span>
    </label>
  );
};

export default ToggleSwitch;
