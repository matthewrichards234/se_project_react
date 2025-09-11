import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ handleOpenClothingModal }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection handleOpenClothingModal={handleOpenClothingModal} />
    </div>
  );
};

export default Profile;
