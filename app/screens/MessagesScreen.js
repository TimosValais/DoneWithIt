import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Listing from "../components/Listing";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeparator from "./../components/ListItemSeparator";
import ListingDeleteAction from "./../components/ListingDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "This is a really long message begginning now just to see that if we actually increase the number of lines in this title and in the following message of course, we wouldn't forget about the message which is the most important part, will it get cut by number of lines",
    description:
      "We should also check for a way so as to see if we can really carefully and always resposnibly transform the chevron icon to expand the desplayed long message if pressed upon only.",
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
  const [refreshing, setRefreshing] = useState(false);

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
        <ListItem
          image={item.image}
          title={item.title}
          subtitle={item.description}
          onPress={() => console.log("Message Selected", item)}
          renderRightActions={() => (
            <ListingDeleteAction onPress={() => handleDelete(item)} />
          )}
          showChevrons={true}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => {
        setMessages([
          {
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/images/mosh.jpg"),
          },
        ]);
      }}
    />
  );
}

export default MessagesScreen;
