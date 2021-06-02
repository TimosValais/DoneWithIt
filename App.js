import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import HomeScreen from "./app/screens/HomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
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
        <AppText>I love React Native!</AppText>
      </SafeAreaView>
    );
  }
}

export default App;
