import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Logo from "../components/Logo";
import Screen from "./../components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "./../components/AppText";
import defaultStyles from "../config/styles";
import ErrorMessage from "./../components/ErrorMessage";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import AppForm from "../components/Forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen>
      <Logo />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("The Values are", values)}
        validationSchema={validationSchema}
      >
        <View style={styles.formContainer}>
          <SubmitButton title="Login" />
          <AppFormField
            style={styles.formField}
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <AppFormField
            name="email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholder="Email"
          />
        </View>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "column-reverse",
    flex: 5 / 6,
  },
  formField: {
    flexDirection: "column-reverse",
  },
});

export default LoginScreen;
