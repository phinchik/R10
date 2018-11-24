import React, { Component } from "react";
import { Text, View, SectionList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import moment from "moment";

const Schedule = ({ sessions, navigation }) => {
  goToFaves = (id, item) => {};

  return (
    <SectionList
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={item.id}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Session", { key: item.id });
            }}
          >
            <Text>{item.title}</Text>
            <Text style={styles.heart} onPress={() => alert("hello")}>
              ♥
            </Text>
          </TouchableOpacity>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>
          {moment(title.startTime).format("LT")}
        </Text>
      )}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default withNavigation(Schedule);
