import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import Constants from "expo-constants";

import Screen from "./app/components/Screen";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import Card from "./app/components/Card";
import Listing from "./app/components/Listing";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import MainScreen from "./app/screens/MainScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";

const cards = [
  {
    id: "asdf-g63y-g5sr-df34",
    title: "Couch in great condition",
    subTitle: "Only 2 years old!!",
    price: "$1000",
    image: require("./app/assets/images/couch.jpg"),
  },
  {
    id: "s3df-2342-dgq8-912d",
    title: "Red Jacket for sale",
    subTitle: "Awesome Jacket!!",
    price: "$100",
    image: require("./app/assets/images/jacket.jpg"),
  },
];

class App extends Component {
  state = {
    showHomeScreen: true,
    showImageScreen: false,
    showMessagesScreen: false,
    showProfile: false,
  };
  backToLogin = () => {
    this.setState({
      showHomeScreen: true,
      showImageScreen: false,
      showMessagesScreen: false,
      showProfile: false,
    });
    console.log(
      "Show Home Screen : " +
        this.state.showHomeScreen +
        "\nShow Image Screen : " +
        this.state.showImageScreen +
        "\nShow Messages Screen : " +
        this.state.showMessagesScreen +
        "\nShow Profile Screen : " +
        this.state.showProfile
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
    } else if (this.state.showMessagesScreen) {
      return <MessagesScreen />;
    } else if (this.state.showProfile) {
      return <AccountScreen />;
    } else {
      return <LoginScreen />;
    }
  };
  showMessages = (messagesShown) => {
    console.log("This is messagesShown : " + messagesShown);
    if (messagesShown) {
      this.backToLogin();
      return;
    }
    this.setState({
      showHomeScreen: false,
      showMessagesScreen: true,
    });
  };
  showProfile = (profileShown) => {
    console.log("This is profileShown : " + profileShown);
    if (profileShown) {
      this.backToLogin();
      return;
    }
    this.setState({
      showHomeScreen: false,
      showProfile: true,
    });
  };

  render() {
    return (
      <Screen style={{ backgroundColor: colors.lightGrey, flex: 1 }}>
        {this.handleScreens()}

        {this.state.showImageScreen || this.state.showProfile ? null : (
          <TouchableOpacity
            style={styles.messageIcon}
            onPress={() => this.showMessages(this.state.showMessagesScreen)}
          >
            <Feather name="message-circle" size={25} color={colors.black} />
          </TouchableOpacity>
        )}
        {this.state.showImageScreen || this.state.showMessagesScreen ? null : (
          <TouchableOpacity
            style={
              this.state.showProfile ? styles.messageIcon : styles.profileIcon
            }
            onPress={() => this.showProfile(this.state.showProfile)}
          >
            <MaterialCommunityIcons
              name="face-profile"
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.backToLogin}
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
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  messageIcon: {
    position: "absolute",
    top: "7%",
    right: "7%",
    backgroundColor: colors.transparent,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    position: "absolute",
    top: "7%",
    left: "7%",
    backgroundColor: colors.transparent,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  backToLogin: {
    position: "absolute",
    top: "50%",
    backgroundColor: colors.primary,
    width: 90,
    height: 20,
  },
});

export default App;
