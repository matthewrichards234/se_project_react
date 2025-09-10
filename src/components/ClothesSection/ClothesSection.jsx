import { useState } from "react";
import "./ClothesSection.css";
import ItemCards from "../ItemCards/ItemCards";

const ClothesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChangeModal() {
    setIsModalOpen(!isModalOpen);
  }
  return (
    <div className="clothes-section">
      <div className="clothes-section__container">
        <p className="clothes-section__title">Your items</p>
        <button type="button" className="clothes-section__add-new">
          Add new
        </button>
        {/* AddItemModal logic here */}
      </div>
      <ItemCards />
    </div>
  );
};

export default ClothesSection;
