import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Afenir",
  },
});
export default AppText;
