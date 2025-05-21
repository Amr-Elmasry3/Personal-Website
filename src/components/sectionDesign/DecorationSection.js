// Import Css File
import "./decorationSection.css";

// Import Img From Imgs Folder
import shape from "../../assets/imgs/shape-2.png";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function DecorationSection({ direction }) {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  return (
    <div
      className={`decoration-section ${modeState} ${mainColorNow.title} ${direction}`}
    >
      <div className="shape-one">
        <span
          className="circle one same-box-shadow same-border-style"
          style={{
            backgroundColor:
              modeState === "light"
                ? mainColorNow.backgroundColor.lightMode
                : mainColorNow.backgroundColor.darkMode,
          }}
        ></span>
        <span className="line"></span>
        <span
          className="circle two same-box-shadow same-border-style"
          style={{
            backgroundColor:
              modeState === "light"
                ? mainColorNow.backgroundColor.lightMode
                : mainColorNow.backgroundColor.darkMode,
          }}
        ></span>
      </div>

      <img src={shape} alt="" className="shape" />
    </div>
  );
}
