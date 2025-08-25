import React, { useEffect, useState } from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({ isOpen, onClose }) => {
  // Handle Close on Esc
  useEffect(() => {}, []);

  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modalWithForm__container">
        <h1 className="modalWithForm__title">New garment</h1>
        <form action="" className="modalWithForm__form">
          {/* Name input */}
          <label htmlFor="name" className="modalWithForm__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="modalWithForm__input"
            placeholder="Name"
            required
          />

          {/* Image input */}
          <label htmlFor="image" className="modalWithForm__label">
            Image
          </label>
          <input
            type="text"
            id="image"
            className="modalWithForm__input"
            placeholder="Image URL"
            required
          />

          {/* Radio Button input */}
          <label className="modalWithForm__label">
            Select the weather type:
          </label>

          <label className="modalWithForm__label-radio">
            <input
              type="radio"
              name="weather"
              value="hot"
              className="modalWithForm__radio"
              required
            />
            Hot
          </label>

          <label className="modalWithForm__label-radio">
            <input
              type="radio"
              name="weather"
              value="warm"
              className="modalWithForm__radio"
              required
            />
            Warm
          </label>

          <label className="modalWithForm__label-radio">
            <input
              type="radio"
              name="weather"
              value="cold"
              className="modalWithForm__radio"
              required
            />
            Cold
          </label>
          <button type="submit" className="modalWithForm__submit-btn">
            Submit
          </button>
        </form>
        <button
          type="button"
          aria-label="Close modal"
          className="modalWithForm__close-btn"
        ></button>
      </div>
    </div>
  );
};

export default ModalWithForm;
