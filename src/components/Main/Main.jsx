import { useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import { defaultClothingItems } from "../../utils/clothingItems";

const Main = ({ handleOpenPreviewModal, clothingItems, isLoggedIn }) => {
  return (
    <div>
      <WeatherCard />

      {isLoggedIn ? (
        <>
          // True
          <ItemCards
            handleOpenModal={handleOpenPreviewModal}
            clothingItems={clothingItems}
          />
        </>
      ) : (
        <>
          // False
          <ItemCards
            handleOpenModal={handleOpenPreviewModal}
            clothingItems={defaultClothingItems.filter((item) => {
              return item.weather === "warm";
            })}
          />
        </>
      )}
    </div>
  );
};

export default Main;
