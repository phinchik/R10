import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";
import SpeakerModal from "../../components/SpeakerModal";
import FaveItem from "../../components/FaveItem";

const Session = ({
  sessionId,
  sessionIds,
  allSessions,
  createFave,
  deleteFave,
  navigation,
  allFaves
}) => {
  const scheduleId = sessionId;
  const session = allSessions[0].data.filter(session => {
    return session.id === scheduleId;
  });
  const listOfFaveIds = Array.from(sessionIds);

  const searchSession = listOfFaveIds.filter(session => {
    return session.id === sessionId;
  });

  const isFaved = searchSession.length;

  // <FaveItem id={session.id} />
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{session[0].location}</Text>
      <Text style={{ color: isFaved ? "red" : "black" }}>IS FAVOURITED</Text>
      <Text style={styles.title}>{session[0].title}</Text>
      <Text style={styles.time}>
        {moment(session[0].startTime).format("LT")}
      </Text>
      <Text style={styles.description}>{session[0].description}</Text>

      <View style={styles.speakerContainer}>
        <Text>Presented by:</Text>
        <SpeakerModal speaker={session[0].speaker} />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (isFaved) {
            console.log("DELETING @@@@@@@@");
            deleteFave(sessionId);
          } else {
            console.log("CREATING @@@@@@@");
            createFave(sessionId, new Date());
          }
        }}
      >
        <Text>{isFaved ? "Unfavourite" : "Favourite"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default withNavigation(Session);
