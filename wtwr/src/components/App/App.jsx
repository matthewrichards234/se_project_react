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
      <div className="item-cards">
        {defaultClothingItems.map((item) => {
          return <ItemCard key={item._id} name={item.name} link={item.link} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
