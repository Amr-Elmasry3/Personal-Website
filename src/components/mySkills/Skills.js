// Import Css File
import "./skills.css";

// Import Skills Data
import { skills } from "../../Data";

// Import UseState & UseRef Hook
import { useState, useRef } from "react";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Shape Component
import DecorationSection from "../sectionDesign/DecorationSection";

export default function Skills() {
  const skillsRef = useRef(null);
  const { mainColorNow, modeState } = useContext(ThemeContext);

  const [skillsState, setSkillsState] = useState({
    state: false,
    data: skills,
  });

  window.onscroll = () => {
    if (window.scrollY >= skillsRef.current.offsetTop) {
      setSkillsState({ state: true, data: skillsState.data });
    }
  };

  const skillsList = skillsState.data.map((item) => {
    return (
      <div className="box" key={item.id}>
        <div className="margin-cover">
          <div className="info">
            <span className="skill-name same-title-color">{item.skill}</span>

            <span className="percentage same-title-color">
              {item.percentage} <span className="mark same-main-color">%</span>
            </span>
          </div>

          <p className="description same-text-color">{item.description}</p>
        </div>

        <div className="progress">
          <div
            className="child"
            style={{ width: skillsState.state ? `${item.percentage}%` : 0 }}
          >
            <span
              className="circle-shape same-box-shadow same-border-style"
              style={{ backgroundColor: mainColorNow.color }}
            ></span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`skills main-section ${modeState} ${mainColorNow.title}`}
      id="skills"
      ref={skillsRef}
    >
      <div className="container">
        <div className="main-heading">
          <h2 className={`subtitle same-title-color`}>Professional Skills</h2>
          <h4 className={`title same-main-color`}>My Talent</h4>
        </div>

        <div className="content">{skillsList}</div>
      </div>

      <DecorationSection direction="left" />
    </div>
  );
}
