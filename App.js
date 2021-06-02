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
        }}
      >
        {this.state.showHomeScreen ? <HomeScreen /> : <ViewImageScreen />}
        <View
          style={{
            position: "absolute",
            top: "50%",
          }}
        >
          <Button
            title="Toggle Screens"
            onPress={() => this.toggleScreens(this.state.showHomeScreen)}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
