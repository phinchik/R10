import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

class FaveItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fave: false
    };
  }

  toggleItem = () => {
    this.setState({ fave: !this.state.fave });
  };

  render() {
    console.log("propsss", this.props);
    return (
      <View key={this.props.id} onPress={() => this.toggleItem()}>
        {this.state.fave === true ? (
          <Icon
            style={{ fontSize: 25 }}
            name={(ios = "ios-heart-empty")}
            size={20}
            color="red"
          />
        ) : (
          <Icon
            style={{ fontSize: 25 }}
            name={(ios = "ios-heart-empty")}
            size={20}
            color="#999999"
          />
        )}
      </View>
    );
  }
}

// FaveItem.propTypes = {
//   id: PropTypes.string.isRequired
// };

export default FaveItem;
