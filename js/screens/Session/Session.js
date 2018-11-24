import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";

const Session = ({ data, faveId }) => {
  console.log("thissss", data);
  return (
    <View style={styles.container}>
      <Text>Hello from session</Text>
    </View>
  );
};

export default Session;
