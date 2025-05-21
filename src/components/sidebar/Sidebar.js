// Import Css File
import "./sidebar.css";

// Import Links Data
import { links } from "../../Data";

// Import UseState Hook
import { useState } from "react";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Matrial Ui Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CloseIcon from "@mui/icons-material/Close";

// Import Shape From Imgs Folder
import shape from "../../assets/imgs/shape-3.png";

export default function Sidebar({ state, handleMenuIconState }) {
  const { mainColorNow, modeState } = useContext(ThemeContext);
  const [linksState, setLinksState] = useState(links);

  function handlelinksState(id) {
    const newLinksState = [...linksState];
    newLinksState.map((link) => {
      return id === link.id ? (link.active = true) : (link.active = false);
    });

    setLinksState(newLinksState);
  }

  const linksList = linksState.map((link) => {
    return (
      <a
        href={link.href}
        key={link.id}
        onClick={() => {
          handlelinksState(link.id);
        }}
      >
        <li
          className={`same-title-color same-hover-color`}
          style={{ color: link.active ? mainColorNow.color : null }}
        >
          {link.title}
        </li>
      </a>
    );
  });

  return (
    <div
      className={`sidebar ${modeState} ${mainColorNow.title} ${state}`}
      style={{
        backgroundColor:
          modeState === "light"
            ? mainColorNow.backgroundColor.lightMode
            : mainColorNow.backgroundColor.darkMode,
      }}
    >
      <CloseIcon
        className="close-icon same-title-color"
        onClick={() => {
          handleMenuIconState();
        }}
      />

      <img src={shape} alt="" className="shape" />

      <ul>{linksList}</ul>

      <div className="social-links">
        <a href="/">
          <TwitterIcon className="icon same-title-color same-hover-color" />
        </a>

        <a href="/">
          <YouTubeIcon className="icon same-title-color same-hover-color" />
        </a>

        <a href="/" className="same-title-color same-hover-color">
          Be
        </a>
      </div>
    </div>
  );
}
