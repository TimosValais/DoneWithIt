import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import Card from "./app/components/Card";
import Listing from "./app/components/Listing";
import ViewImageScreen from "./app/screens/ViewImageScreen";

class App extends Component {
  state = {
    showHomeScreen: true,
    showImageScreen: false,
  };
  backToLogin = () => {
    this.setState({ showHomeScreen: true, showImageScreen: false });
    console.log(
      "Show Home Screen : " +
        this.state.showHomeScreen +
        "\nShow Image Screen : " +
        this.state.showImageScreen
    );
  };

  toggleHomeScreen = (showHomeValue) => {
    console.log("Pressed Home");
    this.setState({ showHomeScreen: !showHomeValue });
  };
  toggleImageScreen = () => {
    console.log("Pressed");
    let imageScreenShow = !this.state.showImageScreen;
    let homeScreenShow = !this.state.showHomeScreen;
    this.setState({
      showHomeScreen: homeScreenShow,
      showImageScreen: imageScreenShow,
    });
    console.log(
      "this is the showimagescreen state : " + this.state.showImageScreen
    );
  };
  handleScreens = () => {
    if (this.state.showHomeScreen) {
      return (
        <HomeScreen
          loginButtonPress={() =>
            this.toggleHomeScreen(this.state.showHomeScreen)
          }
          registerButtonPress={() => this.toggleImageScreen()}
        />
      );
    } else if (this.state.showImageScreen) {
      return <ViewImageScreen onClosePress={this.toggleImageScreen} />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 / 2 }}>
            <Card
              image={require("./app/assets/images/jacket.jpg")}
              price={"100$"}
              title="Red Jacket For Sale"
              subTitle="This is my favorite red jacket!!"
            />
          </View>
          <View style={{ flex: 1 / 2 }}>
            <Listing
              image={require("./app/assets/images/mosh.jpg")}
              name="Mosh Hamedani"
              noOfListings={5}
            />
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 20,
        }}
      >
        {this.handleScreens()}
        <TouchableOpacity
          style={{
            position: "absolute",
            top: "50%",
            backgroundColor: colors.primary,
            width: 90,
            height: 20,
          }}
          onPress={() => this.backToLogin()}
        >
          <Text
            style={{
              color: colors.white,
            }}
          >
            Back to login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
