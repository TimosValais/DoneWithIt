import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

function AppButton({ title, onPress, textColor, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={{ color: textColor, fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
