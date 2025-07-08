import { useContext } from "react";
import styles from "./app.module.scss";
import Header from "./components/header/Header";
import { DarkModeContext } from "./context/DarkModeProvider";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? styles.appDarkContainer : styles.appContainer}>
      <Header />
    </div>
  );
}

export default App;
