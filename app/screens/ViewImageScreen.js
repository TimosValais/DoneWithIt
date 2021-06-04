import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = ({ onClosePress, onDeletePress, randomText }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onClosePress()} style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={25} />
      </Pressable>
      <Pressable onPress={() => onDeletePress()} style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={25}
        />
      </Pressable>
      <Image
        source={require("../assets/images/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      {/* <Text
        style={{
          color: colors.white,
          backgroundColor: colors.black,
          fontSize: 18,
          flex: 1,
        }}
      >
        {randomText}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 5 / 6,
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    left: "5%",
    top: "2%",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteIcon: {
    position: "absolute",
    right: "5%",
    top: "2%",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

ViewImageScreen.defaultProps = {
  onClosePress: () => {
    console.log("Close Button Pressed");
  },
  onDeletePress: () => {
    console.log("Delete Button Pressed");
  },
  randomText: "This is random text",
};

export default ViewImageScreen;
