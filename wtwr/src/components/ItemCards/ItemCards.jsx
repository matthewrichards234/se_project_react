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
            {defaultClothingItems.map((item) => {
              return (
                <ItemCard key={item._id} name={item.name} link={item.link} />
              );
            })}
          </div>
        }
      </ul>
    </div>
  );
};

export default ItemCards;
