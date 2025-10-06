import "./SideBar.css";
import PFP from "../../assets/Images/user-pfp.svg";

const SideBar = ({ handleOpenEditProfileModal, handleLogout }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={PFP} alt="PFP" className="sidebar__pfp" />
        <p className="sidebar__username">Terrence Tegegne</p>
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
