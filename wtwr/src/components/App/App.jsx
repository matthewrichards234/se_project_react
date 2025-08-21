import React, { useState } from "react";
import { defaultClothingItems } from "../../utils/clothingItems";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import Footer from "../Footer/Footer";
import ItemCard from "../ItemCard/ItemCard";

// The curly brackets contain the props for the App component.
const App = ({ name, link }) => {
  const [state, setState] = useState(defaultClothingItems);
  return (
    <div className="page">
      <Header />
      <WeatherCard />
      <ItemCards />
      <Footer />
    </div>
  );
};

export default App;
