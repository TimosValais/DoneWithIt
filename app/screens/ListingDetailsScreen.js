import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/Card";
import Listing from "./../components/Listing";

const ListingDetailsScreen = ({
  cardImage,
  cardPrice,
  cardTitle,
  cardSubtitle,
  listingImage,
  listingTitle,
  listingSubTitle,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 / 2 }}>
        <Card
          image={cardImage}
          title={cardTitle}
          subTitle={cardSubtitle}
          price={cardPrice}
        />
      </View>
      <View style={{ flex: 1 / 2 }}>
        <Listing
          image={listingImage}
          title={listingTitle}
          subtitle={listingSubTitle}
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;
