import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("landing-stats-services-root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
