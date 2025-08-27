import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./ItemCards.css";

const ItemCards = ({ handleOpenModal }) => {
  return (
    <div className="item-cards">
      <ul className="item-cards__ul">
        {defaultClothingItems
          .filter((item) => item.weather.toLowerCase() === "warm")
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
