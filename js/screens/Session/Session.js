import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import moment from "moment";
import { withNavigation } from "react-navigation";

const Session = ({ sessionId, allSessions, navigation }) => {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Speaker", { key: session.id });
          }}
        >
          <Text style={styles.text}>Presented by:</Text>
          <Image
            style={styles.image}
            source={{ uri: session[0].speaker.image }}
          />
          <Text style={styles.speakerName}>{session[0].speaker.name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default withNavigation(Session);
