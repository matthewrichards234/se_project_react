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
  const [state, setState] = useState(defaultClothingItems);
  // Modal state toggle & function.
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <WeatherCard />
      <ItemCards />
      {/* <Footer /> */}
      <ModalWithForm />
    </div>
  );
};

export default App;
