import React from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <ModalWithForm
        isOpen={isOpen}
        onCloseModal={onCloseModal}
      ></ModalWithForm>
    </div>
  );
};

export default AddItemModal;
