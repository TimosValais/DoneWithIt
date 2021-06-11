import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Logo from "../components/Logo";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";

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
});

export default LoginScreen;
