import React from "react";
import "./ItemModal.css";
import ItemCard from "../ItemCard/ItemCard";

const ItemModal = ({ isOpen, onClose, item, handleDeleteItem }) => {
  function handleDelete() {
    handleDeleteItem(item);
  }
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_preview">
        <img src={item?.imageUrl} alt={item?.name} className="modal__image" />
        <h1 className="modal__header">{item?.name}</h1>
        <h2 className="modal__weather-caption">Weather: {item?.weather}</h2>
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        ></button>
        <button
          type="button"
          className="modal__delete-btn"
          onClick={handleDelete}
        >
          Delete item
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
