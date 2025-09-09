import React, { useEffect, useState } from "react";
import "./ModalWithForm.css";

// Add Clothing Modal
const Modal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <h1 className="modal__title">New garment</h1>
        <form className="modal__form">
          {/* onSubmit={handleSubmit} */}
          <label htmlFor="name" className="modal__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="modal__input"
            placeholder="Name"
            // value={formValues.name}
            // onChange={handleChange}
          />

          <label htmlFor="image" className="modal__label">
            Image
          </label>
          <input
            type="url"
            id="image"
            name="image"
            className="modal__input"
            placeholder="Image URL"
            // value={formValues.image}
            // onChange={handleChange}
          />

          <label className="modal__label">Select the weather type:</label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="hot"
              className="modal__radio"
              // checked={formValues.weather === "hot"}
              // onChange={handleChange}
            />
            Hot
          </label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="warm"
              className="modal__radio"
              // checked={formValues.weather === "warm"}
              // onChange={handleChange}
            />
            Warm
          </label>

          <label className="modal__label-radio">
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modal__radio"
              // checked={formValues.weather === "cold"}
              // onChange={handleChange}
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

export default Modal;
