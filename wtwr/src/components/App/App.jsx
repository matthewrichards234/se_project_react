import React, { useState } from "react";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
// import ItemCard from "../ItemCard/ItemCard";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// The curly brackets contain the props for the App component.
const App = ({ name, link }) => {
  const [state, setState] = useState(defaultClothingItems);
  return (
    <div className="page">
      <Header />
      <WeatherCard />
      <ItemCards />
      <Footer />
      <ModalWithForm /> {/* Adding for Styling */}
    </div>
  );
};

export default App;
