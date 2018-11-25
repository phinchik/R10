import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

const Speaker = ({ allSessionsSpeaker, Id }) => {
  const sessionId = Id;
  const speaker = allSessionsSpeaker.filter(speaker => {
    return speaker.id === sessionId;
  });
  return (
    <View>
      <Text>{speaker.name} </Text>
    </View>
  );
};

export default Speaker;
