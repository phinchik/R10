import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  toggleItem = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <View key={this.props.conduct.id}>
        <TouchableOpacity onPress={() => this.toggleItem()}>
          <View>
            <Text style={styles.itemTitle}>
              <Icon
                style={{ fontSize: 25 }}
                name={(ios = "ios-add")}
                size={20}
                color="#9963ea"
              />
              {this.props.conduct.title}
            </Text>
            {this.state.show && (
              <Text style={styles.itemDescription}>
                {this.props.conduct.description}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

ConductItem.propTypes = {
  conduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default ConductItem;
