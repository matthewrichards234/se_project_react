import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";

const Main = ({ handleOpenPreviewModal, clothingItems, isLoggedIn }) => {
  return (
    <div>
      <WeatherCard />

      <ItemCards
        handleOpenModal={handleOpenPreviewModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Main;
