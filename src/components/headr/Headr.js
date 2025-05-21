// Import Css File
import "./headr.css";

// Import Matrial Ui Icons
import SettingsIcon from "@mui/icons-material/Settings";

// Import UseContext Hook And ThemeContext
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Components
import Sidebar from "../sidebar/Sidebar";
import Themes from "../themes/Themes";

export default function Headr() {
  const [menuIconState, setMenuIconState] = useState(false);
  const [themeIconState, setThemeIconState] = useState(false);
  const { modeState } = useContext(ThemeContext);

  function handleMenuIconState() {
    setMenuIconState(!menuIconState);
  }

  function handleThemeIconState() {
    setThemeIconState(!themeIconState);
  }

  return (
    <>
      <div className={`headr ${modeState}`}>
        <div className="container">
          <a href="#home" className="logo same-title-color">
            Miller
          </a>
          <div className="icons">
            <SettingsIcon
              className="icon same-title-color"
              onClick={handleThemeIconState}
            />
            <div className={"burger-icon"} onClick={handleMenuIconState}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <Sidebar
        state={menuIconState ? "open" : "close"}
        handleMenuIconState={handleMenuIconState}
      />

      <Themes
        state={themeIconState ? "open" : "close"}
        handleThemeIconState={handleThemeIconState}
      />
    </>
  );
}
