import { Platform, StyleSheet } from "react-native";
import AppText from "./AppText";

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Afenir",
  },
});

export default styles;
