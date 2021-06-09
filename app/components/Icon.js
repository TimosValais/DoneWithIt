import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({
  title = "email",
  backgroundColor = colors.black,
  size = 50,
  color = colors.white,
}) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        borderRadius: size / 2,
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={title}
        size={size * 0.5}
        color={color}
      ></MaterialCommunityIcons>
    </View>
  );
}

export default Icon;
