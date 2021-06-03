import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";

class App extends Component {
  state = {
    showHomeScreen: true,
  };

  toggleScreens = (showHomeValue) => {
    this.setState({ showHomeScreen: !showHomeValue });
  };
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppButton
          title="LOGIN"
          onPress={() => this.toggleScreens()}
          buttonColor={colors.primary}
          textColor={colors.white}
        />
      </SafeAreaView>
    );
  }
}

export default App;
