// Import Css File
import "./resume.css";

// Impoer Resume Data
import { resume } from "../../Data";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Components
import SectionBox from "../myResume/sectionBox/SectionBox";

// Import Shape Component
import DecorationSection from "../sectionDesign/DecorationSection";

export default function Resume() {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  return (
    <div
      className={`resume main-section ${modeState} ${mainColorNow.title}`}
      id="resume"
    >
      <div className="container">
        <div className="main-heading">
          <h2 className={`subtitle same-title-color`}>Resume</h2>
          <h4 className={`title same-main-color`}>My Story</h4>
        </div>

        <div className="content">
          <div className="education-section section">
            <h4 className="resume-title same-title-color">Education</h4>

            <SectionBox data={resume.educationData} />
          </div>

          <div className="experience-section section">
            <h4 className="resume-title same-title-color">Experience</h4>

            <SectionBox data={resume.experienceData} />
          </div>
        </div>
      </div>

      <DecorationSection direction="left" />
    </div>
  );
}
