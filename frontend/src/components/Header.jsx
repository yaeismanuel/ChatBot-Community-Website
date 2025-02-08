import { useState, useContext } from "react";
import { ContextData } from "../App";
import { TiThMenu } from "react-icons/ti";
import { FaMoon, FaSun } from "react-icons/fa";
import { useMainStore } from "../store.js";

const Header = () => {
  const toggleMenu = useMainStore(state => state.toggleMenu);
  const localMode = localStorage.getItem("mode") === "dark" ? true : false;
  const [darkMode, setDarkMode] = useState(localMode);
  darkMode && document.body.classList.add("darkMode");
  const toggleMode = () => {
    document.body.classList.toggle("darkMode");
    setDarkMode(!darkMode);
    localStorage.setItem("mode", darkMode ? "light" : "dark");
  };

  return (
    <header>
      <div className="menuIcon" onClick={() => toggleMenu(false)}>
        <TiThMenu />
      </div>
      <div className="logo">
        <div className="logoIcon">
          Chatbot
          <br />
          Community
        </div>
      </div>
      <div className="mode" onClick={toggleMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </header>
  );
};

export default Header;
