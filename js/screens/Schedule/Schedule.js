import moment from "moment";
import React from "react";
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import PropTypes from "prop-types";

const Schedule = ({ sessions, navigation, faveIds }) => {
  return (
    <SectionList
      renderItem={({ item }) => {
        const isFaved = faveIds.includes(item.id);
        return (
          <View style={styles.itemContainer} key={item.id}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Session", { id: item.id });
              }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </TouchableOpacity>
            {faveIds.includes(item.id) ? (
              <Icon
                style={styles.heart}
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
                size={20}
                color="red"
              />
            ) : (
              <Icon
                style={styles.heart}
                name={Platform.select({
                  ios: "ios-heart",
                  android: "md-heart"
                })}
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

Schedule.propTypes = {
  sessions: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  faveIds: PropTypes.array.isRequired
};

export default withNavigation(Schedule);
