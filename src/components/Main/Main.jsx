import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";

const Main = ({ handleOpenPreviewModal }) => {
  return (
    <div>
      <WeatherCard />
      <ItemCards handleOpenModal={handleOpenPreviewModal} />
    </div>
  );
};

export default Main;
