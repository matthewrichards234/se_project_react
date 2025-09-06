import React, { useState, useEffect, useContext } from "react";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
// import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { apiKey, longitude, latitude } from "../../utils/constants";
import { weatherApi, getWeatherCondition } from "../../utils/weatherApi";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";
import Main from "../Main/Main";
import { weatherCardConditions } from "../../utils/weatherConditions";

const App = ({ name, link }) => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    temp: { F: null, C: null },
    clothing: "",
    condition: "Default",
    isDay: true,
    city: "",
  });

  function handleOpenClothingModal() {
    setActiveModal("add-clothes");
  }

  function handleOpenPreviewModal(item) {
    setActiveModal("preview");
    setSelectedItem(item);
  }

  function closeAllModals() {
    setActiveModal("");
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  }

  useEffect(() => {
    function handleEscapeClose(e) {
      if (e.key === "Escape") {
        closeAllModals();
      }
    }
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  useEffect(() => {
    weatherApi()
      .then((data) => {
        // Set temperature in both F and C.
        const tempF = Math.round(data.main.feels_like);
        const tempC = Math.round(((tempF - 32) * 5) / 9);
        const clothing = getWeatherCondition(tempF);

        let currWeather = { temp: { C: tempC, F: tempF }, clothing: clothing };

        // Set weather condition (Sunny, Rainy, etc.)

        // Condition is name of weather.
        const condition = data.weather[0].main;

        currWeather.condition = condition;

        // To-Do
        const isDay = true;

        currWeather.isDay = isDay;

        setWeatherData(currWeather);

        console.log(data);
      })
      .catch(console.error);
  }, []);

  console.log(weatherData);

  return (
    <div className="page">
      <CurrentUnitTemperatureContext.Provider
        value={{
          temperature: weatherData.temp,
          currentTemperatureUnit,
          handleToggleSwitchChange,
          weatherData,
        }}
      >
        <Header handleOpenModal={handleOpenClothingModal} />
        <Main handleOpenPreviewModal={handleOpenPreviewModal} />
        <Footer />
        <ModalWithForm
          isOpen={activeModal === "add-clothes"}
          onClose={closeAllModals}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          onClose={closeAllModals}
          item={selectedItem}
        />
      </CurrentUnitTemperatureContext.Provider>
    </div>
  );
};

export default App;
