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
    return (
      <ScrollView>
        <Modal
          animationType={"slide"}
          visible={this.state.showModal}
          onRequestClose={() => this.setState({ showModal: false })}
        >
          <View>
            <Button
              onPress={() => this.setState({ showModal: false })}
              title="x"
            />
            <Text>About the Speaker</Text>
          </View>
          <ScrollView>
            <Image source={{ uri: this.props.speaker.image }} />
            <Text>{this.props.speaker.name}</Text>
            <Text>{this.props.speaker.bio}</Text>
          </ScrollView>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({ showModal: true })}>
          <Image
            source={{ uri: this.props.speaker.image }}
            style={{ height: 50, width: 50 }}
          />
          <Text>{this.props.speaker.name}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
