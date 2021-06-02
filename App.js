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
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 30,
            fontStyle: "italic",
            fontWeight: "600",
            color: "tomato",
            textTransform: "capitalize",
            textDecorationLine: "line-through",
            textAlign: "center",
            lineHeight: 60,
          }}
        >
          I love React Native! This is my first React Native app! Here's some
          more text.
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
