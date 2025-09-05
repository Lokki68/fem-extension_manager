import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/DarkModeProvider";
import "./index.scss";

const queryClient = new QueryClient({});

createRoot(document.getElementById("root")).render(
  <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </DarkModeProvider>
);
