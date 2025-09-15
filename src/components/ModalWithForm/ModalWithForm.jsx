import React, { useEffect, useState } from "react";
import "./ModalWithForm.css";
import useForm from "../../hooks/useForm.js";

// Add Item Modal
const ModalWithForm = ({ isOpen, onClose, handleAddItemSubmit }) => {
  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit({ ...values });
  };
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <h1 className="modal__title">New garment</h1>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="modal__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="modal__input"
            placeholder="Name"
            required
            onChange={handleChange}
            value={values.name}
          />

          <label htmlFor="image" className="modal__label">
            Image
          </label>
          <input
            type="url"
            id="image"
            name="imageUrl"
            className="modal__input"
            placeholder="Image URL"
            required
            minLength={2}
            onChange={handleChange}
            value={values.imageUrl}
          />

          <label className="modal__label">Select the weather type:</label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio"
              checked={values.weather === "hot"}
              onChange={handleChange}
            />
            Hot
          </label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio"
              checked={values.weather === "warm"}
              onChange={handleChange}
            />
            Warm
          </label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio"
              checked={values.weather === "cold"}
              onChange={handleChange}
            />
            Cold
          </label>

          <button type="submit" className="modal__submit-btn">
            Add garment
          </button>
        </form>

        <button
          type="button"
          aria-label="Close modal"
          className="modal__close-btn"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalWithForm;
