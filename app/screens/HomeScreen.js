import React from "react";
import { Text, View, ImageBackground, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import Logo from "../components/Logo";
import AppButton from "./../components/AppButton";

const HomeScreen = ({ loginButtonPress }) => {
  return (
    <React.Fragment>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        resizeMode="stretch"
        style={styles.background}
        blurRadius={1.5}
      >
        <AppButton
          title="LOGIN"
          onPress={loginButtonPress}
          textColor={colors.white}
          style={styles.loginButton}
        />
        <AppButton
          title="REGISTER"
          onPress={() => console.log("Register Button Pressed")}
          textColor={colors.white}
          style={styles.registerButton}
        />
        <Logo />
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: colors.primary,
    alignItems: "center",
    width: "100%",
    borderRadius: 50,
    padding: 12,
    margin: 6,
  },
  registerButton: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    width: "100%",
    borderRadius: 50,
    padding: 12,
    margin: 6,
  },
});

export default HomeScreen;
