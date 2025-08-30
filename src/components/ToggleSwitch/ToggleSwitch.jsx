import React, { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [degrees, setDegrees] = useState("F");

  function handleChangeDegrees() {
    if (degrees === "F") {
      setDegrees("C");
    } else {
      setDegrees("F");
    }
    console.log(degrees);
  }

  return (
    <label className="toggle-switch">
      <input type="checkbox" onClick={handleChangeDegrees} />
      <span className="toggle-switch__slider"></span>
      <span className="toggle-switch__label-f">F</span>
      <span className="toggle-switch__label-c">C</span>
    </label>
  );
};

export default ToggleSwitch;
