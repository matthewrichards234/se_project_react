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
              <li className="item-cards__content">
                <ItemCard
                  name={item.name}
                  link={item.link}
                  weather={item.weather}
                  key={item._id}
                  onClick={handleOpenModal}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ItemCards;
