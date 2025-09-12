import React from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, handleAddItemSubmit, onClose }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      handleAddItemSubmit={handleAddItemSubmit}
    />
  );
};

export default AddItemModal;
