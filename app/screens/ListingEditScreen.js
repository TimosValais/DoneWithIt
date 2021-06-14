import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Logo from "../components/Logo";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import AppFormPicker from "../components/Forms/AppFormPicker";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable(),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    pickerIcon: {
      title: "floor-lamp",
      backgroundColor: "#fc5c65",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Clothing",
    value: 2,
    pickerIcon: {
      title: "shoe-heel",
      backgroundColor: "#2bcbba",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 3,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 4,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 5,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 6,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 7,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 8,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 9,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 10,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 11,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
  {
    label: "Cameras",
    value: 12,
    pickerIcon: {
      title: "camera",
      backgroundColor: "#fed330",
      color: colors.white,
      size: 75,
    },
  },
];

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log("The Values are", values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          maxLength={255}
          name="title"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
        />
        <AppFormField
          style={{ width: "25%" }}
          maxLength={8}
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
        />
        <AppFormPicker
          style={{ width: "50%" }}
          placeholder="Category"
          items={categories}
          name="category"
          listStyle={{
            flexDirection: "column",
            alignItems: "center",
            padding: 20,
          }}
          horizontal={true}
        />
        <AppFormField
          maxLength={255}
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
        />
        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
