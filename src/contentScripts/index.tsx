import React from "react";
import { createRoot } from "react-dom/client";
import "fontsource-roboto";
import "./contentScript.css";
const container = document.createElement("div");
container.id = "root-content";
document.body.appendChild(container);

const root = createRoot(container);

const App: React.FC<{}> = () => {
  return <h1>Content Script</h1>;
};
root.render(<App />);
