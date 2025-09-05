import { useContext } from "react";
import Switch from "react-switch";
import { DarkModeContext } from "../../../context/DarkModeProvider";
import { useToggleExtension } from "../../../hooks/useToggleExtension";
import styles from "./item.module.scss";

const Item = ({ data }) => {
  const toggleMutation = useToggleExtension();
  const { darkMode } = useContext(DarkModeContext);
  const { id, logo, name, description, isActive } = data;

  const imageUrl = (logo) => {
    const baseImageUrl = "assets/images/";
    const logoArray = logo.split("/");

    return `${baseImageUrl}${logoArray[logoArray.length - 1]}`;
  };

  const handleSwitchChange = () => {
    toggleMutation.mutate({ id, newValue: !isActive });
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
        <Switch
          checked={isActive}
          onChange={handleSwitchChange}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#c7221a"
          height={24}
          width={48}
        />
      </div>
    </div>
  );
};

export default Item;
