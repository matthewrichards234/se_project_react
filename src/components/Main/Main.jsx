import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";

const Main = ({ handleOpenPreviewModal, clothing }) => {
  return (
    <div>
      <WeatherCard />
      <ItemCards handleOpenModal={handleOpenPreviewModal} clothing={clothing} />
    </div>
  );
};

export default Main;
