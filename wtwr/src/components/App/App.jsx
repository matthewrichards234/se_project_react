import React, { useState } from "react";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
// import ItemCard from "../ItemCard/ItemCard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const App = ({ name, link }) => {
  // const [state, setState] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");

  function handleOpenClothingModal() {
    setActiveModal("add-clothes");
  }

  function handleOpenPreviewModal() {
    setActiveModal("preview");
  }

  return (
    <div className="page">
      <Header handleOpenModal={handleOpenClothingModal} />
      <WeatherCard />
      <ItemCards />
      {/* <Footer /> */}
      <ModalWithForm isOpen={activeModal === "add-clothes"} />
    </div>
  );
};

export default App;
