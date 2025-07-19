import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeProvider";
import { ExtensionsProvider } from "./context/ExtensionsProvider.jsx";
import "./index.scss";

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <ExtensionsProvider>
      <App />
    </ExtensionsProvider>
  </DarkModeProvider>
);
