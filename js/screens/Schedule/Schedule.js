import moment from "moment";
import React from "react";
import { SectionList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import styles from "./styles";

const Schedule = ({ sessions, navigation, faveIds }) => {
  return (
    <SectionList
      renderItem={({ item }) => {
        const isFaved = faveIds.includes(item.id);
        return (
          <View style={styles.itemContainer} key={item.id}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Session", { key: item.id, item });
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </TouchableOpacity>
            {isFaved ? (
              <Icon
                style={styles.heart}
                name={(ios = "ios-heart-empty")}
                size={20}
                color="red"
              />
            ) : (
              <Icon
                style={styles.heart}
                name={(ios = "ios-heart-empty")}
                size={20}
                color="#999999"
              />
            )}
          </View>
        );
      }}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{moment(title).format("LT")}</Text>
      )}
      sections={sessions}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default withNavigation(Schedule);
