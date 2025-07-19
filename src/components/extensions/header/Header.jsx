import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeProvider";
import FilterButton from "../list/filterButton/FilterButton";
import styles from "./header.module.scss";

const Header = ({ activeFilter, allData, activeData, inactiveData }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? styles.darkContainer : styles.lightContainer}>
      <h2>Extensions List</h2>
      <div className={styles.filterButtonContainer}>
        <FilterButton
          name="All"
          fN={allData}
          isActive={activeFilter === "all"}
        />
        <FilterButton
          name="Active"
          fN={activeData}
          isActive={activeFilter === "active"}
        />
        <FilterButton
          name="Inactive"
          fN={inactiveData}
          isActive={activeFilter === "inactive"}
        />
      </div>
    </div>
  );
};

export default Header;
