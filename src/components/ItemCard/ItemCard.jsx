import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item, handleOpenModal }) => {
  function handlePreviewClick() {
    handleOpenModal(item);
  }

  return (
    <li className="item-cards__content">
      <div className="item-card" onClick={handlePreviewClick}>
        <p className="item-card__name">{item.name}</p>
        <img src={item.imageUrl} alt="" className="item-card__img" />
        {/* Once adding API change from item.link -> item.imageUrl.
          Same will apply for item modal. */}
      </div>
    </li>
  );
};

export default ItemCard;
