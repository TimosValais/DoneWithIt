import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import defaultStyles from "../config/styles";

function AppButton({
  title,
  onPress,
  textColor = defaultStyles.colors.white,
  style,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[defaultStyles.appLoginButton, style]}
    >
      <Text style={{ color: textColor, fontSize: 20 }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
