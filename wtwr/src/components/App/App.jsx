import React, { useState } from "react";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
import ItemCard from "../ItemCard/ItemCard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";

const App = ({ name, link }) => {
  const [activeModal, setActiveModal] = useState("");

  function handleOpenClothingModal() {
    setActiveModal("add-clothes");
  }

  function handleOpenPreviewModal() {
    setActiveModal("preview");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  return (
    <div className="page">
      <Header handleOpenModal={handleOpenClothingModal} />
      <WeatherCard />
      <ItemCards handleOpenModal={handleOpenPreviewModal} />
      {/* <ItemCard handleOpenModal={handleOpenPreviewModal} /> */}
      <Footer />
      <ModalWithForm
        isOpen={activeModal === "add-clothes"}
        onClose={handleCloseModal}
      />
      <ItemModal
        isOpen={activeModal === "preview"}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
