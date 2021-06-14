import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Logo from "../components/Logo";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import AppFormPicker from "../components/Forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(2).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable(),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
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
          maxLength={8}
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
        />
        <AppFormPicker
          placeholder="Category"
          items={categories}
          name="category"
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
