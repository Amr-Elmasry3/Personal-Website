// Import Css File
import "./landingSection.css";

// Import Pictures From Imgs Folder
import logo from "../../assets/imgs/profile.png";
import shape from "../../assets/imgs/shape-2.png";

// Import Matrial Ui Icons
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Shape Component
import DecorationSection from "../sectionDesign/DecorationSection";

export default function LandingSection() {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  return (
    <div
      className={`landing-section ${modeState} ${mainColorNow.title}`}
      id="home"
    >
      <div className="container">
        <div className="info">
          <h4 className="same-title-color">
            Hello, <span className={`same-main-color`}>My Name is</span>
          </h4>

          <h1 className={`name same-main-color`}>
            Zoe <span>Miller</span>
          </h1>

          <h4 className="job-title same-title-color">
            Freelance Designer & Developer
          </h4>

          <p className="description same-text-color">
            I am from Paris, France. I have rich experience in web design and am
            skilled in WordPress. I love discussing what makes us unique.
          </p>

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

          <a
            href="/"
            download
            className="button same-title-color same-after-before-bg same-box-shadow same-border-style"
          >
            Download Cv
          </a>
        </div>

        <div className="picture same-after-before-bg">
          <img src={shape} alt="" className="shape one" />
          <img src={shape} alt="" className="shape two" />
          <img src={shape} alt="" className="shape three" />

          <div className="cover">
            <img src={logo} alt="" />
          </div>

          <div
            className="details-box first same-box-shadow same-border-style"
            style={{
              backgroundColor:
                modeState === "light"
                  ? mainColorNow.backgroundColor.lightMode
                  : mainColorNow.backgroundColor.darkMode,
            }}
          >
            <span className="number same-title-color">12+</span>

            <div className="details">
              <span className="same-title-color">Years of</span>
              <span className={`same-main-color`}>Experience</span>
            </div>
          </div>

          <div
            className="details-box second same-box-shadow same-border-style"
            style={{
              backgroundColor:
                modeState === "light"
                  ? mainColorNow.backgroundColor.lightMode
                  : mainColorNow.backgroundColor.darkMode,
            }}
          >
            <span className="number same-title-color">300</span>
            <div className="details">
              <span className="same-title-color">Completed</span>
              <span className={`same-main-color`}>Projects</span>
            </div>
          </div>
        </div>
      </div>

      <DecorationSection direction="left" />
    </div>
  );
}
