import React from "react";
import { Image, Text, View, SafeAreaView, StyleSheet } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subTitle, image, price }) => {
  return (
    <View style={styles.background}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    borderRadius: 15,
    margin: 20,
  },
  description: {
    flex: 1 / 2,
    margin: 5,
    padding: 5,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    fontStyle: "italic",
    color: colors.lightGrey,
  },
  price: {
    fontSize: 14,
    color: colors.secondary,
  },
});

export default Card;