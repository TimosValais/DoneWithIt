import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;

  return (
    <>
      <AppText style={styles.error}>{error}</AppText>
    </>
  );
}
const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.danger,
  },
});

export default ErrorMessage;
