import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import moment from "moment";

const Session = ({ sessionId, allSessions }) => {
  const scheduleId = sessionId;
  const session = allSessions.filter(session => {
    return session.id === scheduleId;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{session[0].location}</Text>
      <Text style={styles.heart} onPress={() => alert("hello")}>
        ♥
      </Text>

      <Text style={styles.title}>{session[0].title}</Text>
      <Text style={styles.time}>
        {moment(session[0].startTime).format("LT")}
      </Text>
      <Text style={styles.description}>{session[0].description}</Text>
      <View style={styles.speakerContainer}>
        <Text style={styles.text}>Presented by:</Text>
        <Image
          style={styles.image}
          source={{ uri: session[0].speaker.image }}
        />
        <Text style={styles.speakerName}>{session[0].speaker.name}</Text>
      </View>
    </View>
  );
};

export default Session;
