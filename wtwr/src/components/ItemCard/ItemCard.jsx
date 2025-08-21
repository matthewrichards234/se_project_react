import React from "react";

const ItemCard = ({ name, link }) => {
  return (
    <div className="item-card">
      <p className="item-card__name">{name}</p>
      <img src={link} alt="" className="item-card__img" />
    </div>
  );
};

export default ItemCard;
