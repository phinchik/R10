import React, { Component } from "react";
import { Text, View, SectionList, TouchableOpacity } from "react-native";
import styles from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";

const Faves = ({ favList, navigation }) => {
  return (
    <SectionList
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FavesSession", { key: item.id, item });
            }}
          >
            <View style={styles.itemContainer} key={index}>
              <Text style={styles.item}>{item.title}</Text>
              <Text style={styles.heart}>♥</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>
          {moment(title.startTime).format("LT")}
        </Text>
      )}
      sections={favList}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default withNavigation(Faves);
