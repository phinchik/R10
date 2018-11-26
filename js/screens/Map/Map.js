import React, { Component } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";
import styles from "./styles";

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Map</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 49.2827,
            longitude: -123.1207,
            latitudeDelta: 1,
            longitudeDelta: 1
          }}
        />
      </View>
    );
  }
}

export default Map;
