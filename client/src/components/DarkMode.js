import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="dark-mode-button">
      <button onClick={toggleMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default DarkMode;
