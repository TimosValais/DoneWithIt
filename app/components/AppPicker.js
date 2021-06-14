import React, { useState } from "react";
import {
  Platform,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "./../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
  selectedItem,
  onSelectItem,
  icon,
  items,
  placeholder,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              style={styles.icon}
              color={defaultStyles.colors.medium}
            />
          )}
          <AppText
            style={selectedItem ? styles.text : defaultStyles.placeholder}
          >
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.chevron}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
        <Button title="close" onPress={() => setModalVisible(false)} />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    flex: 1,
  },
  chevron: {
    marginLeft: "auto",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
