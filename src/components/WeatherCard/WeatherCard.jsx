import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ temperature }) => {
  return (
    <div className="weather-card">
      <div className="weather-card__container">
        {/* hard coded temperature */}
        <h1 className="weather-card__temperature">{temperature}°F</h1>
      </div>
      <h2 className="weather-card__notification">
        Today is {temperature}° F / You may want to wear:
      </h2>
    </div>
  );
};

export default WeatherCard;
