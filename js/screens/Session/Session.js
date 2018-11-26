import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";
import SpeakerModal from "../../components/SpeakerModal";
import Icon from "react-native-vector-icons/Ionicons";

const Session = ({
  sessionId,
  sessionIds,
  faveIds,
  allSessions,
  createFave,
  deleteFave
}) => {
  const listOfFaveIds = Array.from(sessionIds);

  const searchSession = listOfFaveIds.filter(session => {
    return session.id === faveIds;
  });

  const sessionOwner = allSessions.data[0].filter(session => {
    return session;
  });

  console.log(sessionOwner);

  const isFaved = searchSession.length;

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{sessionOwner.location}</Text>
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

      <Text style={styles.title}>{sessionOwner.title}</Text>
      <Text style={styles.time}>
        {moment(sessionOwner.startTime).format("LT")}
      </Text>
      <Text style={styles.description}>{sessionOwner.description}</Text>

      <View style={styles.speakerContainer}>
        <Text>Presented by:</Text>
        <SpeakerModal speaker={sessionOwner.speaker} />
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
        <Text>{isFaved ? "Unfavourite" : "Favourite"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
