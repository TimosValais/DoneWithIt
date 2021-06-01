import React from "react";
import { Text, View, ImageBackground, Image } from "react-native";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: 80,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/images/logo-red.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text>Sell What You Don't Need</Text>
        </View>
      </ImageBackground>

      <View
        style={{
          flex: 1 / 12,
          backgroundColor: "tomato",
        }}
      />
      <View
        style={{
          flex: 1 / 12,
          backgroundColor: "lightblue",
        }}
      />
    </React.Fragment>
  );
};

export default HomeScreen;
