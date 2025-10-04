import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCards from "../ItemCards/ItemCards";
import { defaultClothingItems } from "../../utils/clothingItems";

const Main = ({ handleOpenPreviewModal, clothingItems, isLoggedIn }) => {
  return (
    <div>
      <WeatherCard />

      <ItemCards
        handleOpenModal={handleOpenPreviewModal}
        clothingItems={
          isLoggedIn
            ? clothingItems
            : defaultClothingItems.filter((item) => item.weather === "warm")
        }
      />
    </div>
  );
};

export default Main;
