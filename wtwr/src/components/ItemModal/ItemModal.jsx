import React from "react";
import "./ItemModal.css";
import ItemCard from "../ItemCard/ItemCard";

const ItemModal = ({ isOpen, onClose, name, link }) => {
  return (
    // className={`modal ${isOpen ? "modal_is-opened" : ""}`}
    <div className="modal modal_is-opened">
      <div className="modal__container">
        <img src={link} alt={name} className="modal__image" />
        <h1 className="modal__header"></h1>
        <h2 className="modal__weather-caption"></h2>
        <button className="modal__close-btn"></button>
      </div>
    </div>
  );
};

export default ItemModal;
