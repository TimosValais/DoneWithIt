import React from "react";
import { FlatList } from "react-native";

import Card from "./../components/Card";
const listings = [
  {
    id: "asdf-g63y-g5sr-df34",
    title: "Couch in great condition",
    subTitle: "Only 2 years old!!",
    price: "$1000",
    image: require("../assets/images/couch.jpg"),
  },
  {
    id: "s3df-2342-dgq8-912d",
    title: "Red Jacket for sale",
    subTitle: "Awesome Jacket!!",
    price: "$100",
    image: require("../assets/images/jacket.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            price={item.price}
            image={item.image}
          />
        )}
      />
    </>
  );
}

export default ListingScreen;
