// Import Css File
import "./footer.css";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Matrial Ui Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  return (
    <div className={`footer main-section ${modeState} ${mainColorNow.title}`}>
      <div className="container">
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

        <p className="copy-right same-title-color">
          © 2025 <span className="same-main-color">Miller</span>. All Rights
          Reserved
        </p>

        <span className="same-title-color">
          Developed by <span className="same-main-color">3MR</span>
        </span>
      </div>
    </div>
  );
}
