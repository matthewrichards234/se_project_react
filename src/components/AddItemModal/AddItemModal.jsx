import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";

const AddItemModal = ({ isOpen, onClose, handleOnSubmit }) => {
  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
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
      title="New garment"
      submitText="Add Garment"
      closeBtnClass="modal__close-btn_gray"
    >
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
    </ModalWithForm>
  );
};

export default AddItemModal;
