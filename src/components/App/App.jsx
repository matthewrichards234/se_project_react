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
import { weatherApi } from "../../utils/weatherApi";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";
import Main from "../Main/Main";

const App = ({ name, link }) => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [temperature, setTemperature] = useState({ F: null, C: null });
  const [weatherCondition, setWeatherCondition] = useState("");

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
        setTemperature({ F: tempF, C: tempC });

        // Set weather condition (Sunny, Rainy, etc.)

        // Condition is name of weather.
        const condition = data.weather[0].main;

        // ID of weather (You can use this too to set the weather card if needed).
        const weatherId = data.weather[0].id;
        console.log(condition);
        setWeatherCondition(condition);

        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentUnitTemperatureContext.Provider
        value={{
          temperature,
          currentTemperatureUnit,
          handleToggleSwitchChange,
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
