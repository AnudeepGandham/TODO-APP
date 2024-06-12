import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Store from "./contexts/Store";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Store>
      <App />
    </Store>
  </StrictMode>
);
