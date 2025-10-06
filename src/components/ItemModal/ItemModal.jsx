import "./ItemModal.css";

const ItemModal = ({ isOpen, onClose, item, handleDeleteItem }) => {
  function handleDelete() {
    handleDeleteItem(item);
  }
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__container modal__container_preview">
        <img src={item?.imageUrl} alt={item?.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__header">{item?.name}</h2>
            <p className="modal__weather-caption">Weather: {item?.weather}</p>
          </div>
          <button
            type="button"
            className="modal__delete-btn"
            onClick={handleDelete}
          >
            Delete item
          </button>
        </div>
        <button
          type="button"
          className="modal__close-btn"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default ItemModal;
