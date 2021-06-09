import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function Icon({ title, backgroundColor, size, color }) {
  return (
    <MaterialCommunityIcons
      style={{
        backgroundColor: backgroundColor,
        borderRadius: 30,
        alignSelf: "center",
        padding: 15,
      }}
      name={title}
      size={size}
      color={color}
    ></MaterialCommunityIcons>
  );
}

export default Icon;
