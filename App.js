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
import HomeScreen from "./homeScreen";
import LoginScreen from "./loginScreen";

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
        }}
      >
        {this.state.showHomeScreen ? <HomeScreen /> : <LoginScreen />}

        <Button
          title="Toggle Screens"
          onPress={() => this.toggleScreens(this.state.showHomeScreen)}
        />
      </SafeAreaView>
    );
  }
}

export default App;
