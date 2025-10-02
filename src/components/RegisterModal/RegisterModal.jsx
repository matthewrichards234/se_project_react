import ModalWithForm from "../ModalWithForm/ModalWithForm";
import useForm from "../../hooks/useForm";

const RegisterModal = ({ isOpen, onClose, handleOnSubmit }) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatarUrl: "",
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
      title="Sign Up"
      submitText="Next"
    >
      <label htmlFor="register-email" className="modal__label">
        Email*
      </label>
      <input
        type="email"
        id="register-email"
        name="email"
        className="modal__input"
        placeholder="Email"
        required
        onChange={handleChange}
        value={values.email}
      />

      <label htmlFor="register-password" className="modal__label">
        Password*
      </label>
      <input
        type="password"
        id="register-password"
        name="password"
        className="modal__input"
        placeholder="Password"
        required
        onChange={handleChange}
        value={values.password}
      />

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

      <label htmlFor="avatarUrl" className="modal__label">
        Avatar URL
      </label>
      <input
        type="url"
        id="avatarUrl"
        name="avatarUrl"
        className="modal__input"
        placeholder="Avatar URL"
        required
        minLength={2}
        onChange={handleChange}
        value={values.avatarUrl}
      />
    </ModalWithForm>
  );
};

export default RegisterModal;
