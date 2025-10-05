import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  handleOpenClothingModal,
  handleOpenPreviewModal,
  clothingItems,
  handleOpenEditProfileModal,
}) => {
  return (
    <div className="profile">
      <SideBar handleOpenEditProfileModal={handleOpenEditProfileModal} />
      <ClothesSection
        handleOpenClothingModal={handleOpenClothingModal}
        handleOpenPreviewModal={handleOpenPreviewModal}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
