import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function AppButton({ title, onPress, textColor, buttonColor }) {
  return (
    <TouchableOpacity
      onPress={() => onPress}
      style={{
        backgroundColor: buttonColor,

        alignItems: "center",
        width: "100%",
        borderRadius: 50,
        padding: 12,
      }}
    >
      <Text style={{ color: textColor, fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
