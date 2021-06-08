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
import { Feather } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import Card from "./app/components/Card";
import Listing from "./app/components/Listing";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MessageScreen from "./app/screens/MessageScreen";

class App extends Component {
  state = {
    showHomeScreen: true,
    showImageScreen: false,
    showMessagesScreen: false,
  };
  backToLogin = () => {
    this.setState({
      showHomeScreen: true,
      showImageScreen: false,
      showMessagesScreen: false,
    });
    console.log(
      "Show Home Screen : " +
        this.state.showHomeScreen +
        "\nShow Image Screen : " +
        this.state.showImageScreen +
        "\nShow Messages Screen : " +
        this.state.showMessagesScreen
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
      return <MessageScreen />;
    } else {
      return (
        <ListingDetailsScreen
          cardImage={require("./app/assets/images/jacket.jpg")}
          cardTitle="Red Jacket For Sale"
          cardSubtitle="This is my favorite red jacket!!"
          cardPrice="100$"
          listingImage={require("./app/assets/images/mosh.jpg")}
          listingTitle="Mosh Hamedani"
          listingSubTitle="5 Listings"
        />
      );
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

  render() {
    return (
      <Screen>
        {this.handleScreens()}

        {this.state.showImageScreen ? null : (
          <TouchableOpacity
            style={styles.messageIcon}
            onPress={() => this.showMessages(this.state.showMessagesScreen)}
          >
            <Feather name="message-circle" size={25} color={colors.black} />
          </TouchableOpacity>
        )}
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
});

export default App;
