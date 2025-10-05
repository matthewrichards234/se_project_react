import "./SideBar.css";
import PFP from "../../assets/Images/user-pfp.svg";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = ({ handleOpenEditProfileModal, setIsLoggedIn }) => {
  // Navigate user to home page upon logout.
  const navigate = useNavigate();

  // Removes token from local storage, sends them to home page, and sets isLoggedIn to 'false'.
  function logout() {
    localStorage.removeItem("token");
    navigate("/");
    setIsLoggedIn(false);
  }
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={PFP} alt="PFP" className="sidebar__pfp" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <button
        type="button"
        className="sidebar__edit-profile-btn"
        onClick={EditProfileModal}
      >
        Change profile data
      </button>
      <button type="button" className="sidebar__logout-btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default SideBar;
