import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeProvider";
import FilterButton from "../list/filterButton/FilterButton";
import styles from "./header.module.scss";

const Header = ({ activeFilter, fnFilter }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? styles.darkContainer : styles.lightContainer}>
      <h2>Extensions List</h2>
      <div className={styles.filterButtonContainer}>
        <FilterButton
          name="All"
          fN={() => fnFilter("all")}
          isActive={activeFilter === "all"}
        />
        <FilterButton
          name="Active"
          fN={() => fnFilter("active")}
          isActive={activeFilter === "active"}
        />
        <FilterButton
          name="Inactive"
          fN={() => fnFilter("inactive")}
          isActive={activeFilter === "inactive"}
        />
      </div>
    </div>
  );
};

export default Header;
