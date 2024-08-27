import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import { FoundProvider } from "./Found";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <FoundProvider>
      <App />
    </FoundProvider>
  </React.StrictMode>
);
