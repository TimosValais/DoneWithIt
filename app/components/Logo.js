import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const Logo = ({ message }) => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/images/logo-red.png")}
        style={styles.logo}
      />
      <Text style={styles.logoMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
    alignSelf: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoMessage: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.black,
  },
});

Logo.defaultProps = {
  message: "Sell What You Don't Need",
};
export default Logo;
