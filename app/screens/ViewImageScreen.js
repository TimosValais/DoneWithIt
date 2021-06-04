import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = (props) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Pressable
          onPress={() => props.onClosePress()}
          style={styles.closeIcon}
        >
          <MaterialCommunityIcons name="close" color={colors.white} size={25} />
        </Pressable>
        <Pressable
          onPress={() => props.onDeletePress()}
          style={styles.deleteIcon}
        >
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
    left: "5%",
    top: "2%",
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  deleteIcon: {
    position: "absolute",
    right: "5%",
    top: "2%",
    width: 50,
    height: 50,
    justifyContent: "center",
  },
});

ViewImageScreen.defaultProps = {
  onClosePress: () => {
    console.log("Close Button Pressed");
  },
  onDeletePress: () => {
    console.log("Delete Button Pressed");
  },
};

export default ViewImageScreen;
