import React from "react";
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
