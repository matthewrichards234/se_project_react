import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const LoginModal = ({ isOpen, onClose, handleOnSubmit }) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(values);
  };
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Log In"
      submitText="Log In"
    >
      <label htmlFor="email" className="modal__label">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="modal__input"
        placeholder="Email"
        required
        onChange={handleChange}
        value={values.email}
      />
      <label htmlFor="password" className="modal__label">
        Password*
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className="modal__input"
        placeholder="Password"
        required
        onChange={handleChange}
        value={values.password}
      />
    </ModalWithForm>
  );
};

export default LoginModal;
