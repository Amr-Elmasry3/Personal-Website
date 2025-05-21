// Import Css File
import "./sectionBox.css";

// Import UseState Hook
import { useState } from "react";

// Import UseContext Hook And ThemeContext
import { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

// Import Matrial Ui Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function SectionBox({ data }) {
  const { mainColorNow, modeState } = useContext(ThemeContext);
  const [dataState, setDataState] = useState(data);

  // Functions
  function handleContentBoxState(id) {
    const newDataState = dataState.map((item) => {
      return item.id === id
        ? { ...item, open: !item.open }
        : { ...item, open: false };
    });

    setDataState(newDataState);
  }

  const dataList = dataState.map((item) => {
    return (
      <div
        key={item.id}
        className="section-box"
        onClick={() => {
          handleContentBoxState(item.id);
        }}
      >
        <h5 className="headr-title same-title-color">{item.headrTitle}</h5>

        <div className={item.open ? "content-box open" : "content-box"}>
          <div className="details">
            <h3 className="content-title same-title-color">
              {item.contentTitle}
            </h3>

            <span className="date same-title-color">{item.date}</span>
          </div>

          <p className="description same-text-color">{item.description}</p>
        </div>

        <div
          className="button-box same-box-shadow same-border-style"
          style={{
            backgroundColor:
              modeState === "light"
                ? mainColorNow.backgroundColor.lightMode
                : mainColorNow.backgroundColor.darkMode,
          }}
        >
          {item.open ? (
            <RemoveIcon className="icon same-title-color" />
          ) : (
            <AddIcon className="icon same-title-color" />
          )}
        </div>
      </div>
    );
  });

  return dataList;
}
