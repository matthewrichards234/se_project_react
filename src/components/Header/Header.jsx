import "./Header.css";
import Logo from "../../assets/Images/wtwr-logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  handleOpenModal,
  handleOpenLoginModal,
  handleOpenSignupModal,
  isLoggedIn,
}) => {
  const date = new Date();
  const options = {
    month: "long",
    day: "numeric",
  };

  const { name, avatar } = useContext(CurrentUserContext);

  return (
    <div className="header">
      <NavLink to="/">
        <img src={Logo} alt="WTWR Logo" className="header__logo" />
      </NavLink>
      <p className="header__date-location">
        {date.toLocaleString("en-GB", options)}
        {", New York"}
      </p>
      <ToggleSwitch className="header__toggle-switch" />
      {isLoggedIn ? (
        <>
          <button
            className="header__add-clothes"
            type="button"
            onClick={handleOpenModal}
          >
            + Add clothes
          </button>
          <p className="header__user-name">{name}</p>
          <NavLink to="/profile">
            <img
              src={avatar}
              alt="Profile Picture"
              className="header__user-pfp"
            />
          </NavLink>
        </>
      ) : (
        <>
          <button
            type="button"
            className="header__signin-btn"
            onClick={handleOpenSignupModal}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="header__login-btn"
            onClick={handleOpenLoginModal}
          >
            Log In
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
