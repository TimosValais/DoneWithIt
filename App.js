import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { View, SafeAreaView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import HomeScreen from "./app/screens/HomeScreen";
import Card from "./app/components/Card";
import Listing from "./app/components/Listing";

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
        {this.state.showHomeScreen ? (
          <HomeScreen
            loginButtonPress={() =>
              this.toggleScreens(this.state.showHomeScreen)
            }
          />
        ) : (
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
        )}
      </SafeAreaView>
    );
  }
}

export default App;
