import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListHorizontal({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listing}>{item.component}</View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: colors.white,
    alignItems: "flex-start",
    justifyContent: "center",
    marginVertical: 10,
  },
  listing: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default ListHorizontal;
