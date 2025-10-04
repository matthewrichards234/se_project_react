import "./SideBar.css";
import PFP from "../../assets/Images/user-pfp.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <img src={PFP} alt="PFP" className="sidebar__pfp" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
      <button type="button" className="sidebar__edit-profile-btn">
        Change profile data
      </button>
      <button type="button" className="sidebar__logout-btn">
        Log Out
      </button>
    </div>
  );
};

export default SideBar;
