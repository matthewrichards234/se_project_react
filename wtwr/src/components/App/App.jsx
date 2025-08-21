import React from "react";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div className="page">
      <Header />
      <WeatherCard />
      <Footer />
    </div>
  );
};

export default App;
