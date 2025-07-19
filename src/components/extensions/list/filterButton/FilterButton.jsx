import clsx from "clsx";
import { useContext } from "react";
import { DarkModeContext } from "../../../../context/DarkModeProvider";
import styles from "./filter_button.module.scss";

const FilterButton = ({ name, fN, isActive }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div
      className={clsx(
        darkMode ? styles.buttonDarkContainer : styles.buttonLightContainer,
        isActive ? styles.active : ""
      )}
      onClick={fN}
    >
      {name}
    </div>
  );
};

export default FilterButton;
