// Import Css File
import "./themes.css";

// Import UseState Hook
import { useState } from "react";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Matrial Ui Icons
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

export default function Themes({ state, handleThemeIconState }) {
  const {
    mainColorNow,
    modeState,
    colorsState,
    setColorsState,
    setMainColorNow,
    setModeState,
  } = useContext(ThemeContext);

  const [mode, setMode] = useState(modeState);

  function handleClickOnColor(id) {
    const newColorsState = [...colorsState];
    newColorsState.map((item) => {
      return item.id === id ? (item.active = true) : (item.active = false);
    });

    setColorsState(newColorsState);
    setMainColorNow();
  }

  function handleClideOnRadioInput(newMode) {
    newMode === "light" ? setModeState("dark") : setModeState("light");
  }

  const colorsList = colorsState.map((color) => {
    return (
      <li
        key={color.id}
        className={color.active ? "active" : null}
        style={{ backgroundColor: color.color }}
        onClick={() => {
          handleClickOnColor(color.id);
        }}
      >
        <CheckIcon className="icon" />
      </li>
    );
  });

  return (
    <div
      className={`themes ${modeState} ${state}`}
      style={{
        backgroundColor:
          modeState === "light"
            ? mainColorNow.backgroundColor.lightMode
            : mainColorNow.backgroundColor.darkMode,
      }}
    >
      <CloseIcon
        className={`close-icon same-title-color`}
        onClick={handleThemeIconState}
      />

      <h3 className={`element same-title-color`}>Style Switcher</h3>

      <div className="element colors-section">
        <span className={`title same-title-color`}>Colors</span>

        <div className="content">{colorsList}</div>
      </div>

      <div className={`element mode-section`}>
        <span className={`title same-title-color`}>Mode</span>

        <div className="content">
          <div className="box">
            <input
              type="radio"
              value="light"
              name="mode"
              checked={mode === "light" ? true : false}
              onChange={(eve) => {
                if (eve.target.checked) {
                  setMode(eve.target.value);
                  handleClideOnRadioInput(mode);
                }
              }}
            />
            <label className={`same-title-color`}>Light</label>
          </div>

          <div className="box">
            <input
              type="radio"
              value="dark"
              name="mode"
              checked={mode === "dark" ? true : false}
              onChange={(eve) => {
                if (eve.target.checked) {
                  setMode(eve.target.value);
                  handleClideOnRadioInput(mode);
                }
              }}
            />
            <label className={`same-title-color`}>Dark</label>
          </div>
        </div>
      </div>
    </div>
  );
}
