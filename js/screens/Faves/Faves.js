import React, { Component } from "react";
import { Text, View, SectionList } from "react-native";
import styles from "./styles";

const Faves = ({ allSessions }) => {
  console.log("this is fave");
  return (
    <SectionList
      renderItem={({ item, index, section }) => (
        <View style={styles.itemContainer} key={index}>
          <Text style={styles.item}>{item}</Text>
          <Text style={styles.heart}>♥ </Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      sections={[
        { title: "Title1", data: ["item1", "item2"] },
        { title: "Title2", data: ["item3", "item4"] },
        { title: "Title3", data: ["item5", "item6"] }
      ]}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default Faves;
