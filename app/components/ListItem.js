import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ListItem = ({
  image,
  IconComponent,
  title = "My Title",
  subtitle,
  onPress = () => console.log("Button Pressed"),
  renderRightActions = () => console.log("Swipped Right"),
  renderLeftActions,
  showChevrons,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.black} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent ? IconComponent : null}
          {image && (
            <Image style={styles.image} source={image} resizeMode="contain" />
          )}
          <View style={styles.description}>
            <Text numberOfLines={2} style={styles.title}>
              {title}
            </Text>
            {subtitle && (
              <Text numberOfLines={2} style={styles.subTitle}>
                {subtitle}
              </Text>
            )}
          </View>
          {showChevrons && (
            <View style={{ marginLeft: "auto" }}>
              <MaterialCommunityIcons name="chevron-right" size={20} />
            </View>
          )}
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
  },
  description: {
    justifyContent: "center",
    flexDirection: "column",
    padding: 1,
    marginLeft: 12,
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

export default ListItem;
