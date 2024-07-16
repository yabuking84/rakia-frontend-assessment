import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/assets/styles/globals.scss";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css";
import StoreProvider from "@/providers/store-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
