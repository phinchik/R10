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

const Session = ({
  sessionId,
  allSessions,
  createFave,
  deleteFave,
  favouriteId
}) => {
  let sessions = [];
  for (let i = 0; i < allSessions.length; i++) {
    sessions.push(...allSessions[i].data);
  }

  let session;
  for (let i = 0; i < sessions.length; i++) {
    if (sessions[i].id === sessionId) {
      session = sessions[i];
    }
  }

  const isFaved = favouriteId.includes(session.id);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.location}>{session.location}</Text>
      {isFaved ? (
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

      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.time}>{moment(session.startTime).format("LT")}</Text>
      <Text style={styles.description}>{session.description}</Text>

      <View style={styles.speakerContainer}>
        <Text style={styles.presentedBy}>Presented by:</Text>
        <SpeakerModal speaker={session.speaker} />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (isFaved) {
            deleteFave(sessionId);
          } else {
            createFave(sessionId, new Date());
          }
        }}
      >
        <View>
          {isFaved ? (
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
  sessionId: PropTypes.string.isRequired,
  createFave: PropTypes.func.isRequired,
  deleteFave: PropTypes.func.isRequired,
  favouriteId: PropTypes.array.isRequired,
  allSessions: PropTypes.array.isRequired
};

export default Session;
