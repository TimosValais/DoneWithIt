import React from "react";
import { View, StyleSheet } from "react-native";
import AppTextInput from "../AppTextInput";
import AppText from "../AppText";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import defaultStyles from "../../config/styles";

function AppFormField({ name, style, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <View style={[styles.container, style]}>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppText style={{ color: defaultStyles.colors.danger }}>
        <ErrorMessage
          visible={touched[name]}
          error={errors[name]}
        ></ErrorMessage>
      </AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    maxHeight: 100,
  },
});
export default AppFormField;
