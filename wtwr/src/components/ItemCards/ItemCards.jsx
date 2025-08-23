import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./ItemCards.css";

const ItemCards = () => {
  return (
    <div>
      <ul className="item-cards">
        {defaultClothingItems
          .filter((item) => item.weather.toLowerCase() === "warm")
          .map((item) => {
            return (
              <li key={item._id} className="item-cards__content">
                <ItemCard
                  name={item.name}
                  link={item.link}
                  weather={item.weather}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ItemCards;
