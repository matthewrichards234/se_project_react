import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const SideBar = ({ handleOpenEditProfileModal, handleLogout }) => {
  const { name, avatar } = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={avatar} alt="PFP" className="sidebar__pfp" />
        <p className="sidebar__username">{name}</p>
      </div>
      <div className="sidebar__buttons">
        <button
          type="button"
          className="sidebar__edit-profile-btn"
          onClick={handleOpenEditProfileModal}
        >
          Change profile data
        </button>
        <button
          type="button"
          className="sidebar__logout-btn"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
