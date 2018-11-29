import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      opacity: new Animated.Value(0)
    };
  }

  toggleItem = () => {
    const toggleShow = !this.state.show;
    this.startAnimation(this.toggleShow);
    this.setState({
      show: !this.state.show
    });
  };

  startAnimation() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 800,
      easing: Easing.elastic(0.5)
    }).start();
  }

  render() {
    return (
      <ScrollView key={this.props.conduct.id}>
        <TouchableOpacity onPress={() => this.toggleItem()}>
          <View>
            <View style={styles.itemTitle}>
              <Icon
                style={{ fontSize: 25, paddingRight: 10 }}
                name={(ios = "ios-add")}
                size={20}
                color="#9963ea"
              />

              <Text style={styles.conductTitle}>
                {this.props.conduct.title}
              </Text>
            </View>
            {this.state.show && (
              <Text style={styles.itemDescription}>
                {this.props.conduct.description}
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </ScrollView>
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
