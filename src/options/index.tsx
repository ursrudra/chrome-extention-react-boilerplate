import React from "react";
import { createRoot } from "react-dom/client";
import "./Options.scss";
const container = document.getElementById("root-popup");
if (container) {
  const root = createRoot(container);
  const OptionPage = () => <h1>Options Page</h1>;
  root.render(<OptionPage />);
}
