import { useContext } from "react";
import lightImage from "../../../assets/images/icon-moon.svg";
import darkImage from "../../../assets/images/icon-sun.svg";
import { DarkModeContext } from "../../../context/DarkModeProvider";
import styles from "./toggleButton.module.scss";

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button
      className={darkMode ? styles.darkContainer : styles.lightContainer}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <img src={darkImage} alt="toggle light mode" />
      ) : (
        <img src={lightImage} alt="toggle dark mode" />
      )}
    </button>
  );
};

export default ToggleButton;
