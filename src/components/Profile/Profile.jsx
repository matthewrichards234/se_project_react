import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  handleOpenClothingModal,
  handleOpenPreviewModal,
  clothingItems,
}) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleOpenClothingModal={handleOpenClothingModal}
        handleOpenPreviewModal={handleOpenPreviewModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
