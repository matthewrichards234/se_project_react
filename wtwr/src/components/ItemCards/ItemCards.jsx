import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/clothingItems";
import "./ItemCards.css";

const ItemCards = () => {
  return (
    <div>
      <ul className="item-card__grid">
        {
          <div className="item-cards">
            {defaultClothingItems
              .filter((item) => item.weather.toLowerCase() === "warm")
              .map((item) => {
                return (
                  <ItemCard
                    key={item._id}
                    name={item.name}
                    link={item.link}
                    weather={item.weather}
                  />
                );
              })}
          </div>
        }
      </ul>
    </div>
  );
};

export default ItemCards;
