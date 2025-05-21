// Import Css File
import "./portfolio.css";

// Import Portfolio Data
import { portfolioItems } from "../../Data";

// Import UseState Hook
import { useState } from "react";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Shape From Imgs Folder
import shape from "../../assets/imgs/shape-2.png";

// Import Matrial Ui Icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// Import Shape Component
import DecorationSection from "../sectionDesign/DecorationSection";

export default function Portfolio() {
  const { mainColorNow, modeState } = useContext(ThemeContext);
  const [tagsState, setTagsState] = useState([
    { id: 1, title: "All", active: true },
    { id: 2, title: "Photography", active: false },
    { id: 3, title: "Development", active: false },
    { id: 4, title: "Branding", active: false },
  ]);
  const [tagActiveTitle, setTagAciveTitle] = useState("All");

  // Functions
  function handleTagActiveNow(id) {
    const newTagsState = tagsState.map((tag) => {
      return tag.id === id
        ? { ...tag, active: true }
        : { ...tag, active: false };
    });

    setTagsState(newTagsState);
  }

  function handleTagActiveTitle(id) {
    setTagAciveTitle(tagsState[id - 1].title);
  }

  const tagsList = tagsState.map((tag) => {
    return (
      <li
        key={tag.id}
        className={`tag ${
          !tag.active ? "same-title-color" : "same-main-color"
        } ${tag.active ? "active" : null}`}
        onClick={() => {
          handleTagActiveNow(tag.id);
          handleTagActiveTitle(tag.id);
        }}
      >
        {tag.title}
        <span
          className="after"
          style={{ backgroundColor: mainColorNow.color }}
        ></span>
      </li>
    );
  });

  // eslint-disable-next-line array-callback-return
  const projectsList = portfolioItems.map((item) => {
    if (item.category === tagActiveTitle || tagActiveTitle === "All") {
      return (
        <div
          key={item.id}
          className="box"
          style={{
            backgroundColor:
              modeState === "light"
                ? mainColorNow.backgroundColor.lightMode
                : mainColorNow.backgroundColor.darkMode,
          }}
        >
          <img src={item.img} alt="" className="project-img" />

          <span className="category same-main-color">{item.category}</span>

          <span className="title same-title-color">{item.title}</span>

          <p className="description same-text-color">{item.description}</p>

          <a href="/" className={`same-title-color`}>
            See Pricing <ArrowRightAltIcon className={`icon same-main-color`} />
          </a>

          <img src={shape} alt="" className="shape" />
        </div>
      );
    }
  });

  return (
    <div
      className={`portfolio main-section ${modeState} ${mainColorNow.title}`}
      id="works"
    >
      <div className="container">
        <div className="main-heading">
          <h2 className={`subtitle same-title-color`}>Portfolio</h2>
          <h4 className={`title same-main-color`}>My Cases</h4>
        </div>

        <ul className="tags">{tagsList}</ul>

        <div className="content">{projectsList}</div>
      </div>

      <DecorationSection direction="right" />
    </div>
  );
}
