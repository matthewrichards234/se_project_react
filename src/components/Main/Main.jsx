import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import { useContext } from "react";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";

const Main = ({ handleOpenPreviewModal, clothingItems, handleLikeClick }) => {
  const { weatherData } = useContext(CurrentUnitTemperatureContext);
  return (
    <div>
      <WeatherCard />

      <ItemCards
        handleOpenModal={handleOpenPreviewModal}
        clothingItems={clothingItems.filter(
          (item) => item.weather.toLowerCase() === weatherData.clothing
        )}
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
};

export default Main;
