import React from "react";
import "./ModalWithForm.css";

const ModalWithForm = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  submitText,
  children,
}) => {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container">
        <h1 className="modal__title">{title}</h1>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__submit-btn">
            {submitText}
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
