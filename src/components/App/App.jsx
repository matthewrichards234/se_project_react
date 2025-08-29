import React, { useState, useEffect } from "react";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const App = ({ name, link }) => {
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

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

  return (
    <div className="page">
      <Header handleOpenModal={handleOpenClothingModal} />
      <WeatherCard />
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
    </div>
  );
};

export default App;
