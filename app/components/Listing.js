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
        <View style={styles.background}>
          <View style={styles.container}>
            <Image style={styles.image} source={image} resizeMode="contain" />
            <View style={styles.description}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>{subtitle}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
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
    padding: 15,
    alignItems: "center",
  },
  image: {
    flex: 1 / 5,
    borderRadius: 100,
    height: "100%",
    width: "100%",
    marginRight: 12,
  },
  description: {
    flex: 2 / 5,
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
