import React, { useContext, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./ItemCards.css";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";

const ItemCards = ({ handleOpenModal, clothingItems }) => {
  const { weatherData } = useContext(CurrentUnitTemperatureContext);

  return (
    <div className="item-cards">
      <ul className="item-cards__ul">
        {defaultClothingItems
          .filter((item) => item.weather.toLowerCase() === weatherData.clothing)
          .map((item) => {
            return (
              <ItemCard
                item={item}
                key={item._id}
                handleOpenModal={handleOpenModal}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default ItemCards;
