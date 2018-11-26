import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.location}>{session.location}</Text>
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

      <Text style={styles.title}>{session.title}</Text>
      <Text style={styles.time}>{moment(session.startTime).format("LT")}</Text>
      <Text style={styles.description}>{session.description}</Text>

      <View style={styles.speakerContainer}>
        <Text>Presented by:</Text>
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
        <Text>
          {isFaved ? (
            <Text style={styles.sessionButton}>Remove From Faves</Text>
          ) : (
            <Text style={styles.sessionButton}>Add To Faves</Text>
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

Session.propTypes = {
  sessionId: PropTypes.string,
  createFave: PropTypes.func,
  deleteFave: PropTypes.func,
  favouriteId: PropTypes.object
};

export default Session;
