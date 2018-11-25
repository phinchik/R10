import React from "react";
import { Text, View, SectionList, TouchableOpacity } from "react-native";
import styles from "./styles";
import { withNavigation } from "react-navigation";
import moment from "moment";
import FaveItem from "../../components/FaveItem";

const Schedule = ({ sessions, navigation }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <View style={styles.itemContainer} key={item.id}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Session", { key: item.id, item });
            }}
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <FaveItem style={styles.heart} id={item.id} />
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
