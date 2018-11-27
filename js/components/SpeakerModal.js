import React, { Component } from "react";
import {
  Text,
  Image,
  Modal,
  View,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { get } from "lodash";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

export default class SpeakerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  ToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const image = get(this.props.speaker, "image");
    const name = get(this.props.speaker, "name");
    const bio = get(this.props.speaker, "bio");
    return (
      <ScrollView>
        <Modal
          animationType={"slide"}
          visible={this.state.showModal}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <View style={styles.root}>
            <View style={styles.title}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    showModal: false
                  })
                }
              >
                <Icon name={(ios = "ios-close")} size={30} style={styles.X} />
              </TouchableOpacity>

              <Text style={styles.AboutText}>About the Speaker</Text>
            </View>
            <ScrollView style={styles.speakerContainer}>
              <Image style={styles.aboutImage} source={{ uri: image }} />
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.bio}>{bio}</Text>
              <LinearGradient
                colors={["#9963ea", "#8797D6"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 0.0 }}
                style={styles.linearGradient}
              >
                <Text style={styles.linearText}>Read More on Wikipedia</Text>
              </LinearGradient>
            </ScrollView>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() =>
            this.setState({
              showModal: true
            })
          }
        >
          <View style={styles.speaker}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.speakerName}>{name}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
