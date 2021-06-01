import React from "react";
import { View, Image } from "react-native";

const LoginScreen = () => {
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1 / 6,
          flexDirection: "row",
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 1 / 6,
          }}
        >
          <View
            style={{
              flex: 1 / 2,
              backgroundColor: "red",
            }}
          />
        </View>
        <View
          style={{
            flex: 4 / 6,
          }}
        />
        <View
          style={{
            flex: 1 / 6,
          }}
        >
          <View
            style={{
              flex: 1 / 2,
              backgroundColor: "lightblue",
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 4 / 6,
        }}
      >
        <Image
          source={require("./assets/images/chair.jpg")}
          style={{
            flex: 1,
            resizeMode: "stretch",
            height: "100%",
            width: "100%",
          }}
        />
      </View>
      <View
        style={{
          flex: 1 / 6,
          backgroundColor: "black",
        }}
      ></View>
    </React.Fragment>
  );
};

export default LoginScreen;
