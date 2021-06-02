import React from "react";
import { Text, View, ImageBackground, Image, StyleSheet } from "react-native";
import colors from "../config/colors";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.background}
      >
        <View style={styles.loginButton} />
        <View style={styles.registerButton} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo-red.png")}
            style={styles.logo}
          />
          <Text>Sell What You Don't Have</Text>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default HomeScreen;
