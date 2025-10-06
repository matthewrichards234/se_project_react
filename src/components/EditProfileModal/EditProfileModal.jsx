import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// EditProfileModal allows users to update their name and/or avatar URL.
// On submit, it sends a fetch request to update the user's profile and verifies authorization.
// Successfully updating will dynamically refresh the avatar and name displayed on the profile in the DOM.

// TO-DO:
// 1. Define handleChange / handleSubmit.
// 2. Write logic to connect onSubmit to backup and update DB / display to DOM.
// 3. Test to see if save user info upon logout.
const EditProfileModal = ({ isOpen, onClose, handleOnSubmit }) => {
  const { values, handleChange } = useForm({
    name: "",
    avatar: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(values);
  };
  return (
    <div>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        title="Change profile data"
        submitText="Save changes"
      >
        <label htmlFor="edit-name" className="modal__label">
          Name*
        </label>
        <input
          type="text"
          className="modal__input"
          id="edit-name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={values.name}
          required
        />
        <label htmlFor="edit-avatar" className="modal__label">
          Avatar*
        </label>
        <input
          type="text"
          className="modal__input"
          id="edit-avatar"
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
          required
        />
      </ModalWithForm>
    </div>
  );
};

export default EditProfileModal;
