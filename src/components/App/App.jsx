import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import { weatherApi, getWeatherCondition } from "../../utils/weatherApi";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route } from "react-router-dom";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getItems } from "../../utils/api";

const App = () => {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
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

  function handleAddItemSubmit(inputValues) {
    console.log(inputValues);
    setClothingItems([inputValues, ...clothingItems]);
    closeAllModals();
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
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

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
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleOpenPreviewModal={handleOpenPreviewModal}
                clothingItems={clothingItems}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                handleOpenClothingModal={handleOpenClothingModal}
                handleOpenPreviewModal={handleOpenPreviewModal}
                clothingItems={clothingItems}
              />
            }
          ></Route>
        </Routes>
        <Footer />
        <ModalWithForm
          isOpen={activeModal === "add-clothes"}
          onClose={closeAllModals}
          handleAddItemSubmit={handleAddItemSubmit}
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
