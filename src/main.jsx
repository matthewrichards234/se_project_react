import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { CurrentUnitTemperatureContext } from "./contexts/CurrentTemperatureUnitContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentUnitTemperatureContext>
      <App />
    </CurrentUnitTemperatureContext>
  </StrictMode>
);
