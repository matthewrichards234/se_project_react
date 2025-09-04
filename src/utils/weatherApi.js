import { apiKey, longitude, latitude } from "./constants";
// import { useState, useEffect } from "react";

export const weatherApi = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  return (
    fetch(url)
      .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      // })
      .catch((error) => {
        console.error(error);
      })
  );
};

// Accepts "temp" in Fahrenheit.
export const getWeatherCondition = (temp) => {
  if (temp >= 86) {
    // Hot
  } else if (temp < 86 && temp >= 66) {
    // Warm
  } else {
    // Cold
  }
};

export const isDay = () => {
  let isDay;

  // check by new Date what time is that now
  // between, say, 6 and 20 this is day, other time is night
  // return boolean relatively
  // use image relatively

  return;
};
