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
          <View>
            <Button
              onPress={() =>
                this.setState({
                  showModal: false
                })
              }
              title="x"
            />
            <Text>About the Speaker</Text>
          </View>
          <ScrollView>
            <Image source={{ uri: image }} />
            <Text>{name}</Text>
            <Text>{bio}</Text>
          </ScrollView>
        </Modal>

        <TouchableOpacity
          onPress={() =>
            this.setState({
              showModal: true
            })
          }
        >
          <Image source={{ uri: image }} style={{ height: 50, width: 50 }} />
          <Text>{name}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
