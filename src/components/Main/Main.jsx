import { useState } from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";

const Main = ({ handleOpenPreviewModal, clothing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function handleOpenModal(item) {
    setSelectedItem(item);
    setIsModalOpen(true);
  }
  return (
    <div>
      <WeatherCard />
      <ItemCards handleOpenModal={handleOpenModal} clothing={clothing} />
    </div>
  );
};

export default Main;
