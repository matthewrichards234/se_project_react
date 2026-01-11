import { useContext } from "react";
import "./WeatherCard.css";
import { weatherCardConditions } from "../../utils/weatherConditions";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = () => {
  const { temperature, currentTemperatureUnit } = useContext(
    CurrentUnitTemperatureContext
  );
  const weatherImage = weatherCardConditions["Default"]["morning"]; // weatherCardConditions[weatherData.condition]
  console.log(weatherImage);
  return (
    <div className="weather-card">
      <div
        className="weather-card__container"
        // style={{ backgroundImage: `url(${weatherImage})` }}
      >
        <h1 className="weather-card__temperature">
          {temperature[currentTemperatureUnit]}°{currentTemperatureUnit}
          {/* <img src={weatherImage} alt="" className="weather-card__img" /> */}
        </h1>
      </div>
      <h2 className="weather-card__notification">
        Today is {temperature[currentTemperatureUnit]}°{currentTemperatureUnit}{" "}
        / You may want to wear:
      </h2>
    </div>
  );
};

export default WeatherCard;
