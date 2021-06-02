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
        <View
          style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
            padding: 25, //padding Horizontal overrides it
            paddingHorizontal: 10, //padding Left overrides it
            paddingLeft: 30,
          }}
        >
          <View
            style={{
              backgroundColor: "gold",
              width: 50,
              height: 50,
            }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
            margin: 20, //marginTop overrides it
            marginTop: 10,
          }}
        ></View>
      </SafeAreaView>
    );
  }
}

export default App;
