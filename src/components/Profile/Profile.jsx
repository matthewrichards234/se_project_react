import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  handleOpenClothingModal,
  handleOpenPreviewModal,
  clothingItems,
  handleOpenEditProfileModal,
  handleLogout,
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
      />
    </div>
  );
};

export default Profile;
