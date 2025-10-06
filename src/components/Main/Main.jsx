import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";

const Main = ({
  handleOpenPreviewModal,
  clothingItems,
  handleLikeClick,
  isLoggedIn,
}) => {
  return (
    <div>
      <WeatherCard />

      <ItemCards
        handleOpenModal={handleOpenPreviewModal}
        clothingItems={clothingItems}
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
};

export default Main;
