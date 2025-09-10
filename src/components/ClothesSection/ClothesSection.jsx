import React from "react";
import "./ClothesSection.css";
import ItemCards from "../ItemCards/ItemCards";

const ClothesSection = () => {
  return (
    <div className="clothes-section">
      <div className="clothes-section__container"></div>
      <ItemCards />
    </div>
  );
};

export default ClothesSection;
