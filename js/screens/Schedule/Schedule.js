import React from "react";
import { Text, View, SectionList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import moment from "moment";

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

            {/* <Text style={styles.heart}>♥</Text> */}
            <Text style={{ color: isFaved ? "red" : "black" }}>HEART</Text>
          </View>
        );
      }}
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
