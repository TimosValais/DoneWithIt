import { Platform } from "react-native";
import colors from "./colors";
import { React } from "react";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
  appLoginButton: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 50,
    height: 40,
  },
  placeholder: {
    fontWeight: "100",
    color: colors.mediumGrey,
  },
};
