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

  useEffect(() => {
    weatherApi()
      .then((data) => {
        const tempF = Math.round(data.main.feels_like);
        const tempC = Math.round(((tempF - 32) * 5) / 9);
        setTemperature({ F: tempF, C: tempC });
      })
      .catch(console.error);
  }, []);
};
