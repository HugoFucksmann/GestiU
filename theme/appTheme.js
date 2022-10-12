import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import { colors } from "./colors";
import { margins } from "./margins";
import { textSize } from "./textSize";

export const appTheme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  textSize: textSize,
  margins: margins,
};
