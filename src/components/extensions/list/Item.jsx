import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeProvider";
import styles from "./item.module.scss";

const Item = ({ data }) => {
  const { darkMode } = useContext(DarkModeContext);
  const { logo, name, description, isActive } = data;

  const imageUrl = (logo) => {
    const baseImageUrl = "assets/images/";
    const logoArray = logo.split("/");

    return `${baseImageUrl}${logoArray[logoArray.length - 1]}`;
  };

  return (
    <div
      className={
        darkMode ? styles.itemDarkContainer : styles.itemLightContainer
      }
    >
      <div className={styles.topContainer}>
        <div className={styles.logoContainer}>
          <img src={imageUrl(logo)} alt={name} />
        </div>
        <div className={styles.infoContainer}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div>remove</div>
        <div>{isActive ? "true" : "false"}</div>
      </div>
    </div>
  );
};

export default Item;
