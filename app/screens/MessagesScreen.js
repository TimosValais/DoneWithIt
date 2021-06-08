import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Listing from "../components/Listing";
import colors from "../config/colors";
import ListItemSeparator from "./../components/ListItemSeparator";
import ListingDeleteAction from "./../components/ListingDeleteAction";

const initialMessages = [
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

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    // Call the server

    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <Listing
          image={item.image}
          title={item.title}
          subtitle={item.description}
          onPress={() => console.log("Message Selected", item)}
          renderRightActions={() => (
            <ListingDeleteAction onPress={() => handleDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

export default MessagesScreen;
