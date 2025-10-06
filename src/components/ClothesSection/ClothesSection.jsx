import { useState } from "react";
import "./ClothesSection.css";
import ItemCards from "../ItemCards/ItemCards";
import AddItemModal from "../AddItemModal/AddItemModal";

const ClothesSection = ({
  handleOpenClothingModal,
  handleOpenPreviewModal,
  clothingItems,
  handleLikeClick,
}) => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__title">Your items</p>
        <button
          type="button"
          className="clothes-section__add-new"
          onClick={handleOpenClothingModal}
        >
          + Add new
        </button>
        {/* AddItemModal logic here */}
      </div>
      <ItemCards
        handleOpenModal={handleOpenPreviewModal}
        clothingItems={clothingItems}
        handleLikeClick={handleLikeClick}
      />
      <AddItemModal />
    </div>
  );
};

export default ClothesSection;
