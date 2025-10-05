import { useState, useEffect, useContext } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ItemModal from "../ItemModal/ItemModal";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { weatherApi, getWeatherCondition } from "../../utils/weatherApi";
import { CurrentUnitTemperatureContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { defaultClothingItems } from "../../utils/clothingItems";
import { addItem, deleteItem, getItems } from "../../utils/api";
import auth from "../../utils/auth";

const App = () => {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({
    temp: { F: null, C: null },
    clothing: "",
    condition: "Default",
    isDay: true,
    city: "",
  });
  // Handle login (T/F) depending on user's status
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Store user data upon login & signout
  const [userData, setUserData] = useState();
  // To navigate user to 'profile' upon login
  const navigate = useNavigate();

  function handleOpenClothingModal() {
    setActiveModal("add-clothes");
  }

  function handleOpenPreviewModal(item) {
    setActiveModal("preview");
    setSelectedItem(item);
  }

  function handleOpenLoginModal() {
    setActiveModal("login");
  }

  function handleOpenSignupModal() {
    setActiveModal("signup");
  }

  function handleOpenEditProfileModal() {
    setActiveModal("edit-profile");
  }

  function closeAllModals() {
    setActiveModal("");
  }

  function handleToggleSwitchChange() {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  }

  function handleAddItemSubmit(inputValues) {
    addItem(inputValues)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeAllModals();
      })
      .catch(console.error);
  }

  function handleDeleteItem(itemToDelete) {
    deleteItem(itemToDelete._id)
      .then(() => {
        const result = clothingItems.filter((item) => {
          return item._id !== itemToDelete._id;
        });
        setClothingItems(result);
        closeAllModals();
      })
      .catch(console.error);
  }

  function handleRegisterUser(inputValues) {
    // 1. Get values from 'RegisterModal' form upon submission.
    // Check if email and password are provided.
    if (inputValues.email && inputValues.password) {
      auth
        .signup(inputValues) // NOTE: Make sure destructuring here is used properly.
        .then(() => {
          // Handle successful registration.
          handleLoginUser(inputValues);
        })
        .catch(console.error);
    }
    // 2. Close modal
    closeAllModals();
    // Navigate user to '/profile'
    navigate("/profile");
  }

  function handleLoginUser(inputValues) {
    // Get values from 'LoginModal' form upon submission.
    if (!inputValues.email || !inputValues.password) {
      return;
    }
    auth
      .signin(inputValues)
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          auth
            .getCurrentUser(data.token)
            .then((data) => {
              setUserData(data);
              setIsLoggedIn(true);
              // Log user in and redirect to profile page.
              navigate("/profile");
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
    // Close modal
    closeAllModals();
  }

  function handleSignInRequest() {
    // If a log-in attempt is successful, check that the server gave access in its response and add it to localStorage
  }

  useEffect(() => {
    function handleEscapeClose(e) {
      if (e.key === "Escape") {
        closeAllModals();
      }
    }
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  useEffect(() => {
    weatherApi()
      .then((data) => {
        // Set temperature in both F and C.
        const tempF = Math.round(data.main.feels_like);
        const tempC = Math.round(((tempF - 32) * 5) / 9);
        const clothing = getWeatherCondition(tempF);

        let currWeather = { temp: { C: tempC, F: tempF }, clothing: clothing };

        // Set weather condition (Sunny, Rainy, etc.)

        // Condition is name of weather.
        const condition = data.weather[0].main;

        currWeather.condition = condition;

        // To-Do
        const isDay = true;

        currWeather.isDay = isDay;

        setWeatherData(currWeather);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.data.reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("token");

    if (!jwt) {
      return;
    }

    auth
      .getCurrentUser(jwt)
      .then((data) => {
        setUserData(data);
        setIsLoggedIn(true);
        // Log user in and redirect to profile page.
        navigate("/profile");
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentUnitTemperatureContext.Provider
        value={{
          temperature: weatherData.temp,
          currentTemperatureUnit,
          handleToggleSwitchChange,
          weatherData,
        }}
      >
        <Header
          handleOpenModal={handleOpenClothingModal}
          handleOpenLoginModal={handleOpenLoginModal}
          handleOpenSignupModal={handleOpenSignupModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleOpenPreviewModal={handleOpenPreviewModal}
                clothingItems={clothingItems}
                isLoggedIn={isLoggedIn}
              />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              // Protect the /profile route by wrapping it in a component that redirects unauthorized users to the main page
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  handleOpenClothingModal={handleOpenClothingModal}
                  handleOpenPreviewModal={handleOpenPreviewModal}
                  clothingItems={clothingItems}
                  handleOpenEditProfileModal={handleOpenEditProfileModal}
                />
              </ProtectedRoute>
            }
          ></Route>
          {/* Catch-all route: redirect logged-in users to /profile, otherwise to /login */}
          {/* Catch-all should go LAST */}
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <Navigate to="/profile" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          ></Route>
        </Routes>
        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-clothes"}
          onClose={closeAllModals}
          handleOnSubmit={handleAddItemSubmit}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          onClose={closeAllModals}
          item={selectedItem}
          handleDeleteItem={handleDeleteItem}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          onClose={closeAllModals}
          handleOnSubmit={handleLoginUser}
        />
        <RegisterModal
          isOpen={activeModal === "signup"}
          onClose={closeAllModals}
          handleOnSubmit={handleRegisterUser}
        />
      </CurrentUnitTemperatureContext.Provider>
    </div>
  );
};

export default App;
