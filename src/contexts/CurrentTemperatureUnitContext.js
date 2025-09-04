import { Children, createContext, useEffect, useState } from "react";
import { weatherApi } from "../utils/weatherApi";

export const CurrentUnitTemperatureContext = createContext({
  F: null,
  C: null,
});

export const CurrentUnitTemperatureProvider = ({ children }) => {
  const [temperature, setTemperature] = useState({
    F: null,
    C: null,
  });
  const [weatherCondition, setWeatherCondition] = useState(null);

  useEffect(() => {
    weatherApi()
      .then((data) => {
        const tempF = Math.round(data.main.feels_like);
        const tempC = Math.round(((tempF - 32) * 5) / 9);
        setTemperature({ F: tempF, C: tempC });

        // Set weather condition (Sunny, Rainy, etc.)
        // Condition is name of weather.
        const condition = data.weather[0].main;

        // ID of weather (You can use this too to set the weather card if needed).
        const weatherId = data.weather[0].id;
        console.log(condition);
        setWeatherCondition(condition);
      })
      .catch(console.error);
  }, []);
};
