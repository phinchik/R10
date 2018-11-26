import moment from "moment";
import React from "react";
import { SectionList, Text, TouchableOpacity, View } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";

const Faves = ({ favList, navigation }) => {
  return (
    <SectionList
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FavesSession", {
                key: item.id,
                item
              });
            }}
          >
            <View style={styles.itemContainer} key={index}>
              <Text style={styles.item}>{item.title}</Text>
              <Text style={styles.heart}>
                <Icon
                  style={styles.heart}
                  name={(ios = "ios-heart-empty")}
                  size={20}
                  color="red"
                />
              </Text>
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
