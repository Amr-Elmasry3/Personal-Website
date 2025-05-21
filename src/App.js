import "./App.css";
// Import UseState Hook
import { useState, useEffect } from "react";

// Import ThemeContext
import { ThemeContext } from "./contexts/ThemeContext";

// Import Components
import Headr from "./components/headr/Headr";
import LandingSection from "./components/landingSection/LandingSection";
import ServicesSection from "./components/services/ServicesSection";
import Skills from "./components/mySkills/Skills";
import Portfolio from "./components/myPortfolio/Portfolio";
import Resume from "./components/myResume/Resume";
import Testimonials from "./components/testimonials/Testimonials";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";

function App() {
  const [colorsState, setColorsState] = useState([
    {
      id: 1,
      title: "first-color",
      color: "hsl(165, 60%, 40%)",
      backgroundColor: {
        lightMode: "hsl(165, 30%, 92%)",
        darkMode: "hsl(165, 10%, 8%)",
      },
      active: true,
    },
    {
      id: 2,
      title: "second-color",
      color: "hsl(265, 60%, 40%)",
      backgroundColor: {
        lightMode: "hsl(265, 30%, 92%)",
        darkMode: "hsl(265, 10%, 8%)",
      },
      active: false,
    },
    {
      id: 3,
      title: "third-color",
      color: "hsl(345, 60%, 40%)",
      backgroundColor: {
        lightMode: "hsl(345, 30%, 92%)",
        darkMode: "hsl(345, 10%, 8%)",
      },
      active: false,
    },
    {
      id: 4,
      title: "fourth-color",
      color: "hsl(65, 60%, 40%)",
      backgroundColor: {
        lightMode: "hsl(65, 30%, 92%)",
        darkMode: "hsl(65, 10%, 8%)",
      },
      active: false,
    },
    {
      id: 5,
      title: "fivth-color",
      color: "hsl(15, 60%, 40%)",
      backgroundColor: {
        lightMode: "hsl(15, 30%, 92%)",
        darkMode: "hsl(15, 10%, 8%)",
      },
      active: false,
    },
  ]);
  const [mainColorNow, setMainColorNow] = useState({
    id: "",
    title: "",
    color: "",
    backgroundColor: {
      lightMode: "",
      darkMode: "",
    },
    active: null,
  });
  const [modeState, setModeState] = useState("light");

  function handleMainColorNow() {
    let mainColor = {};
    // eslint-disable-next-line array-callback-return
    colorsState.map((item) => {
      if (item.active) {
        mainColor = item;
      }
    });

    setMainColorNow(mainColor);
  }

  function handleColorsState(newValues) {
    setColorsState(newValues);
  }

  function handleModeState(newValue) {
    setModeState(newValue);
  }

  useEffect(() => {
    handleMainColorNow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="app"
      style={{
        backgroundColor:
          modeState === "light"
            ? mainColorNow.backgroundColor.lightMode
            : mainColorNow.backgroundColor.darkMode,
      }}
    >
      <ThemeContext.Provider
        value={{
          mainColorNow: mainColorNow,
          modeState: modeState,
          colorsState: colorsState,
          setColorsState: handleColorsState,
          setMainColorNow: handleMainColorNow,
          setModeState: handleModeState,
        }}
      >
        <Headr />
        <LandingSection />
        <ServicesSection />
        <Skills />
        <Portfolio />
        <Resume />
        <Testimonials />
        <ContactMe />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
