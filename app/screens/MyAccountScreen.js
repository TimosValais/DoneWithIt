import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Listing from "../components/Listing";
import colors from "../config/colors";
import ListHorizontal from "../components/ListHorizontal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./../components/AppText";
import Icon from "./../components/Icon";

const firstList = [
  {
    id: 1,
    component: (
      <>
        <Icon
          title="format-list-bulleted"
          backgroundColor={colors.primary}
          size={20}
          color={colors.white}
        />
        <Text
          style={{
            color: colors.black,
            paddingLeft: 20,
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          My Listings
        </Text>
      </>
    ),
  },
  {
    id: 2,
    component: (
      <>
        <Icon
          title="email"
          backgroundColor={colors.secondary}
          size={20}
          color={colors.white}
        />
        <Text
          style={{
            color: colors.black,
            paddingLeft: 20,
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          My Messages
        </Text>
      </>
    ),
  },
];
const secondList = [
  {
    id: 3,
    component: (
      <>
        <Icon
          title="logout"
          backgroundColor={colors.warning}
          size={20}
          color={colors.white}
        />
        <Text
          style={{
            color: colors.black,
            paddingLeft: 20,
            fontWeight: "600",
            fontSize: 18,
          }}
        >
          Log Out
        </Text>
      </>
    ),
  },
];
function MyAccountScreen({
  image,
  title,
  subTitle,
  onPress,
  renderRightAction,
  renderLeftAction,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Listing
          image={image}
          title={title}
          subtitle={subTitle}
          onPress={onPress}
          renderRightActions={renderRightAction}
          renderLeftAction={renderLeftAction}
        />
      </View>
      <View style={styles.item}>
        <ListHorizontal data={firstList} />
      </View>

      <View style={styles.item}>
        <ListHorizontal data={secondList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  item: {
    marginVertical: 10,
  },
  list: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default MyAccountScreen;
