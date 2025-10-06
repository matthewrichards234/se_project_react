import "./ItemCard.css";
import heartIcon from "../../assets/Images/like-button.svg";

const ItemCard = ({ item, handleOpenModal }) => {
  function handlePreviewClick() {
    handleOpenModal(item);
  }

  return (
    <li className="item-card__content">
      <div className="item-card" onClick={handlePreviewClick}>
        <div className="item-card__header">
          <p className="item-card__name">{item.name}</p>
          <button type="button" className="item-card__like-btn">
            <img
              src={heartIcon}
              alt={heartIcon}
              className="item-card__heart-icon"
            />
          </button>
        </div>
        <img src={item.imageUrl} alt={item.name} className="item-card__img" />
      </div>
    </li>
  );
};

export default ItemCard;
