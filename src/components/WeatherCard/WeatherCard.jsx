import React from "react";
import { useContext } from "react";
import "./WeatherCard.css";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ temperature }) => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentUnitTemperatureContext
  );
  return (
    <div className="weather-card">
      <div className="weather-card__container">
        {/* hard coded temperature */}
        <h1 className="weather-card__temperature">
          {temperature}°{currentTemperatureUnit}
        </h1>
      </div>
      <h2 className="weather-card__notification">
        Today is {temperature}°{currentTemperatureUnit} / You may want to wear:
      </h2>
    </div>
  );
};

export default WeatherCard;
