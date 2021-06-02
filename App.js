import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";

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
        <AppText>I love react native!!</AppText>
      </SafeAreaView>
    );
  }
}

export default App;
