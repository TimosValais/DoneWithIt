import React from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import Card from "./../components/Card";
import colors from "./../config/colors";
function MainScreen({ data }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            price={item.price}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});

export default MainScreen;
