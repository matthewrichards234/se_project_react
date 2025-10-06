import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  handleOpenClothingModal,
  handleOpenPreviewModal,
  clothingItems,
  handleOpenEditProfileModal,
  handleLogout,
  handleLikeClick,
}) => {
  return (
    <div className="profile">
      <SideBar
        handleOpenEditProfileModal={handleOpenEditProfileModal}
        handleLogout={handleLogout}
      />
      <ClothesSection
        handleOpenClothingModal={handleOpenClothingModal}
        handleOpenPreviewModal={handleOpenPreviewModal}
        clothingItems={clothingItems}
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
};

export default Profile;
