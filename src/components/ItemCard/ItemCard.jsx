import "./ItemCard.css";

const ItemCard = ({ item, handleOpenModal }) => {
  function handlePreviewClick() {
    handleOpenModal(item);
  }

  return (
    <li className="item-cards__content">
      <div className="item-card" onClick={handlePreviewClick}>
        <p className="item-card__name">{item.name}</p>
        <img src={item.link} alt="" className="item-card__img" />
      </div>
    </li>
  );
};

export default ItemCard;
