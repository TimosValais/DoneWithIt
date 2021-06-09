import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";
import Screen from "./Screen";

const Listing = ({
  image,
  title,
  subtitle,
  onPress,
  renderRightActions,
  renderLeftActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} resizeMode="contain" />
          <View style={styles.description}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "hidden",
    padding: 15,
    alignItems: "center",
    width: "100%",
    backgroundColor: colors.white,
  },
  image: {
    borderRadius: 100,
    height: 70,
    width: 70,
    marginRight: 12,
  },
  description: {
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.black,
  },
  subTitle: {
    color: colors.lightGrey,
    fontSize: 14,
  },
});

export default Listing;
