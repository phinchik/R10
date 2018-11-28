import moment from "moment";
import React from "react";
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

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
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.heart}>
                <Icon
                  style={styles.heart}
                  name={Platform.select({
                    ios: "ios-heart",
                    android: "md-heart"
                  })}
                  size={20}
                  color="red"
                />
              </Text>
            </View>
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{moment(title).format("LT")}</Text>
      )}
      sections={favList}
      keyExtractor={(item, index) => item + index}
    />
  );
};

Faves.propTypes = {
  favList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
};

export default withNavigation(Faves);
