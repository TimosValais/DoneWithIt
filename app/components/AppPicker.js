import React, { useState } from "react";
import {
  Platform,
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "./../config/styles";
import AppText from "./AppText";

function AppPicker({ icon, placeholder, ...otherProps }) {
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
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
            style={styles.chevron}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
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
