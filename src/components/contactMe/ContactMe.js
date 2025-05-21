// Import Css File
import "./contactMe.css";

// Import Contact Info
import { contactInfo } from "../../Data";

// Import UseContext Hook And ThemeContext
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

// Import Shape Component
import DecorationSection from "../sectionDesign/DecorationSection";

// Import Matrial Ui Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function ContactMe() {
  const { mainColorNow, modeState } = useContext(ThemeContext);

  const [personInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [stateMessage, setStateMessage] = useState({
    state: false,
    message: "",
  });

  useEffect(() => {
    resetPersonInfo();
  }, [stateMessage.message]);

  // Functions
  function handleOnChangeEvent(key, value) {
    setPersonInfo({ ...personInfo, [key]: value });
  }

  function handleStateMessage() {
    let newState = true;
    let newMessage = "";
    personInfo.name !== "" &&
    personInfo.email !== "" &&
    personInfo.subject !== "" &&
    personInfo.message !== ""
      ? (newMessage = "Message sent ✔")
      : (newMessage = "Fill all the input fields");

    setStateMessage({
      state: newState,
      message: newMessage,
    });

    setTimeout(() => {
      setStateMessage((data) => {
        return { ...data, state: false };
      });
    }, 4000);
  }

  function resetPersonInfo() {
    setPersonInfo({ name: "", email: "", subject: "", message: "" });
  }

  const contactInfoList = contactInfo.map((item) => {
    return (
      <div key={item.id} className="box">
        <div className="icon-box">
          <div
            className="icon same-box-shadow same-title-color same-border-style"
            style={{
              backgroundColor:
                modeState === "light"
                  ? mainColorNow.backgroundColor.lightMode
                  : mainColorNow.backgroundColor.darkMode,
            }}
          >
            {item.icon}
          </div>

          <span className="line"></span>
        </div>

        <div className="info">
          <h4 className="title same-title-color">{item.title}</h4>
          <h5 className="data same-text-color">{item.data}</h5>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`contact main-section ${modeState} ${mainColorNow.title}`}
      id="contact"
    >
      <div className="container">
        <div className="main-heading">
          <h2 className={`subtitle same-title-color`}>Contact Me</h2>
          <h4 className={`title same-main-color`}>Lest`s Talk About Ideas</h4>
        </div>

        <div className="content">
          <div className="info-part">{contactInfoList}</div>

          <form>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={4} sx={{ flexGrow: 1 }}>
                  <div className="box">
                    <label className="same-title-color">
                      Your Full Name <span className="same-main-color">*</span>
                    </label>

                    <input
                      type="text"
                      value={personInfo.name}
                      className="same-text-color same-border-style"
                      style={{
                        backgroundColor:
                          modeState === "light"
                            ? mainColorNow.backgroundColor.lightMode
                            : mainColorNow.backgroundColor.darkMode,
                      }}
                      onChange={(eve) => {
                        handleOnChangeEvent("name", eve.target.value);
                      }}
                    />
                  </div>
                </Grid>

                <Grid size={4} sx={{ flexGrow: 1 }}>
                  <div className="box">
                    <label className="same-title-color">
                      Your Email Address{" "}
                      <span className="same-main-color">*</span>
                    </label>

                    <input
                      type="email"
                      value={personInfo.email}
                      className="same-text-color same-border-style"
                      style={{
                        backgroundColor:
                          modeState === "light"
                            ? mainColorNow.backgroundColor.lightMode
                            : mainColorNow.backgroundColor.darkMode,
                      }}
                      onChange={(eve) => {
                        handleOnChangeEvent("email", eve.target.value);
                      }}
                    />
                  </div>
                </Grid>

                <Grid size={8} sx={{ flexGrow: 1 }}>
                  <div className="box">
                    <label className="same-title-color">
                      Your Subject <span className="same-main-color">*</span>
                    </label>

                    <input
                      type="text"
                      value={personInfo.subject}
                      className="same-text-color same-border-style"
                      style={{
                        backgroundColor:
                          modeState === "light"
                            ? mainColorNow.backgroundColor.lightMode
                            : mainColorNow.backgroundColor.darkMode,
                      }}
                      onChange={(eve) => {
                        handleOnChangeEvent("subject", eve.target.value);
                      }}
                    />
                  </div>
                </Grid>

                <Grid size={8} sx={{ flexGrow: 1 }}>
                  <div className="box">
                    <label className="same-title-color">
                      Your Message <span className="same-main-color">*</span>
                    </label>

                    <textarea
                      className="same-text-color same-border-style"
                      value={personInfo.message}
                      style={{
                        backgroundColor:
                          modeState === "light"
                            ? mainColorNow.backgroundColor.lightMode
                            : mainColorNow.backgroundColor.darkMode,
                      }}
                      onChange={(eve) => {
                        handleOnChangeEvent("message", eve.target.value);
                      }}
                    ></textarea>
                  </div>
                </Grid>
              </Grid>
            </Box>

            <div className="button-box">
              <button
                className="button same-title-color same-after-before-bg same-box-shadow same-border-style"
                onClick={(eve) => {
                  eve.preventDefault();
                  handleStateMessage();
                }}
              >
                Send Message
              </button>

              <span
                className={`state ${stateMessage.state ? "open" : null}`}
                style={{
                  color:
                    stateMessage.message === "Message sent ✔" ? "green" : "red",
                }}
              >
                {stateMessage.message}
              </span>
            </div>
          </form>
        </div>
      </div>

      <DecorationSection direction="left" />
    </div>
  );
}
