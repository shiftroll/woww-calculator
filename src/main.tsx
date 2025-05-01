import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Expose to global scope for embedding
(window as any).renderMyApp = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  }
};
