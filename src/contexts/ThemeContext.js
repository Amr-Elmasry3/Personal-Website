import { createContext } from "react";

export const ThemeContext = createContext({
  mainColorNow: {},
  modeState: "",
  colorsState: [],
  setColorsState: null,
  setMainColorNow: null,
  setModeState: null,
});
