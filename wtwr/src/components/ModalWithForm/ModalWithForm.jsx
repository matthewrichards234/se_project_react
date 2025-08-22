import React from "react";

const ModalWithForm = () => {
  return (
    <div className="modalWithForm">
      <div className="modalWithForm__container">
        <h1 className="modalWithForm__title">New garment</h1>
        <form action="" className="modalWithForm__form">
          {/* Name input */}
          <label htmlFor="name" className="modalWithForm__label">
            Name
          </label>
          <input type="text" id="name" className="modalWithForm__name" />

          {/* Image input */}
          <label htmlFor="image" className="modalWithForm__label">
            Image
          </label>
          <input type="text" id="image" className="modalWithForm__image" />

          {/* Radio Button input */}
          <label className="modalWithForm__label">
            Select the weather type:
          </label>

          <label className="modalWithForm__radio">
            <input type="radio" name="weather" value="hot" />
            Hot
          </label>

          <label className="modalWithForm__radio">
            <input type="radio" name="weather" value="warm" />
            Warm
          </label>

          <label className="modalWithForm__radio">
            <input type="radio" name="weather" value="cold" />
            Cold
          </label>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
