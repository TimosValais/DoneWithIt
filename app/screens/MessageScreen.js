import React from "react";
import { FlatList } from "react-native";
import Listing from "./../components/Listing";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/mosh.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <Listing
          image={item.image}
          title={item.title}
          subtitle={item.description}
        />
      )}
    />
  );
}

export default MessageScreen;
