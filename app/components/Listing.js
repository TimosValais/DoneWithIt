import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import colors from "../config/colors";

const Listing = ({ image, name, noOfListings }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} resizeMode="contain" />
        <View style={styles.description}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.listings}>{noOfListings} Listings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1 / 5,
    flexDirection: "row",
    overflow: "hidden",
    padding: 20,
    alignItems: "center",
  },
  image: {
    flex: 1 / 5,
    borderRadius: 100,
    height: "100%",
    width: "100%",
  },
  description: {
    flex: 2 / 5,
    flexDirection: "column",
  },
  name: {
    flex: 1 / 4,
    fontWeight: "bold",
    fontSize: 14,
    color: colors.black,
  },
  listings: {
    flex: 1 / 4,
    color: colors.lightGrey,
    fontSize: 14,
  },
});

export default Listing;
