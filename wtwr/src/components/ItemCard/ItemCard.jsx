import React from "react";
import "./ItemCard.css";

const ItemCard = ({ name, link, handleOpenModal }) => {
  return (
    <div className="item-card" onClick={handleOpenModal}>
      <p className="item-card__name">{name}</p>
      <img src={link} alt="" className="item-card__img" />
    </div>
  );
};

export default ItemCard;
