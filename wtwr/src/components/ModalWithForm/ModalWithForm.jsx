import React, { useEffect, useState } from "react";
import "./ModalWithForm.css";

const modal = ({ isOpen, onClose }) => {
  // Handle Close on Esc
  useEffect(() => {}, []);

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <h1 className="modal__title">New garment</h1>
        <form action="" className="modal__form">
          {/* Name input */}
          <label htmlFor="name" className="modal__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="modal__input"
            placeholder="Name"
            required
          />

          {/* Image input */}
          <label htmlFor="image" className="modal__label">
            Image
          </label>
          <input
            type="text"
            id="image"
            className="modal__input"
            placeholder="Image URL"
            required
          />

          {/* Radio Button input */}
          <label className="modal__label">Select the weather type:</label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio"
              required
            />
            Hot
          </label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio"
              required
            />
            Warm
          </label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio"
              required
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
        ></button>
      </div>
    </div>
  );
};

export default modal;
