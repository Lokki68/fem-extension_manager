import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeProvider";
import styles from "./header.module.scss";
import Logo from "./logo/Logo";
import ToggleButton from "./toggleButton/ToggleButton";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.darkContainer : styles.lightContainer}>
      <Logo />
      <ToggleButton toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default Header;
