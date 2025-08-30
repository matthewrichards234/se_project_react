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
import { DegreesContext } from "../../contexts/CurrentTemperatureUnitContext";

const App = ({ name, link }) => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const weather = weatherApi();
  weather.then((data) => {
    const temp = Math.round(data.main.feels_like);
    setCurrTemp(temp);
  });
  // const temp = Math.round(data.main.feels_like);
  const [currTemp, setCurrTemp] = useState(null);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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

  useEffect(() => {
    // On keypress, call handleCloseModal.
    // check for an event on keydown
    function handleEscapeClose(e) {
      if (e.key === "Escape") {
        closeAllModals();
      }
    }
    document.addEventListener("keydown", handleEscapeClose);

    // Clean up function.
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  useEffect(() => {
    const weather = weatherApi();
    console.log(typeof weather);
    weather.then((data) => {
      console.log(data);
      console.log(Object.keys(data));
      const temp = Math.round(data.main.feels_like);
      console.log(temp);
    });
  }, []);

  return (
    <div className="page">
      <DegreesContext.Provider>
        <Header handleOpenModal={handleOpenClothingModal} />
        <WeatherCard temperature={currTemp} />
        <ItemCards handleOpenModal={handleOpenPreviewModal} />
        {/* <ItemCard handleOpenModal={handleOpenPreviewModal} /> */}
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
      </DegreesContext.Provider>
    </div>
  );
};

export default App;
