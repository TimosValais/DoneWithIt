import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

const LoginScreen = () => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
        <Image
          source={require("../assets/images/chair.jpg")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    backgroundColor: colors.primary,
    left: "5%",
    top: "2%",
    width: 50,
    height: 50,
  },
  deleteIcon: {
    position: "absolute",
    backgroundColor: colors.secondary,
    right: "5%",
    top: "2%",
    width: 50,
    height: 50,
  },
});

export default LoginScreen;
