import "./ItemCard.css";
import likeIcon from "../../assets/Images/like-button.svg";
import likedIcon from "../../assets/Images/liked-button.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
const ItemCard = ({ item, handleOpenModal, handleLikeClick }) => {
  const currentUser = useContext(CurrentUserContext);

  function handlePreviewClick() {
    handleOpenModal(item);
  }

  let isLiked = item.likes.find((id) => id === currentUser?._id);
  function handleLike() {
    handleLikeClick(item._id, isLiked);
  }

  // console.log(item);

  return (
    <li className="item-card__content">
      <div className="item-card">
        <div className="item-card__header">
          <p className="item-card__name">{item.name}</p>
          <button
            type="button"
            className="item-card__like-btn"
            onClick={handleLike}
          >
            <img
              src={isLiked ? likedIcon : likeIcon}
              alt={isLiked ? likedIcon : likeIcon}
              className="item-card__heart-icon"
            />
          </button>
        </div>
        <img
          src={item.imageUrl}
          alt={item.name}
          className="item-card__img"
          onClick={handlePreviewClick}
        />
      </div>
    </li>
  );
};

export default ItemCard;
