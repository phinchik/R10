import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import SpeakerModal from "../../components/SpeakerModal";
import styles from "./styles";

const Session = ({ data, methods, faveIds }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.location}>{data.location}</Text>
      {faveIds.includes(data.id) ? (
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

      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.time}>{moment(data.startTime).format("LT")}</Text>
      <Text style={styles.description}>{data.description}</Text>

      <View style={styles.speakerContainer}>
        <Text style={styles.presentedBy}>Presented by:</Text>
        <SpeakerModal speaker={data.speaker} />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (faveIds.includes(data.id)) {
            methods.deleteFave(data.id);
          } else {
            methods.createFave(data.id, new Date());
          }
        }}
      >
        <View>
          {faveIds.includes(data.id) ? (
            <View>
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.sessionButton}>Remove From Faves</Text>
              </LinearGradient>
            </View>
          ) : (
            <View>
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.sessionButton}>Add To Faves</Text>
              </LinearGradient>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

Session.propTypes = {
  faveIds: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};

export default Session;
