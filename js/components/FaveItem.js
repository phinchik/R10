import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import FavesContext from "../context/FavesContext/FavesProvider";

class FaveItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fave: false
    };
  }

  // toggleItem = () => {
  //   this.setState({ fave: !this.state.fave });
  // };

  // faveSchedule = () => {
  //   alert("test");
  // };

  render() {
    return (
      <FavesContext.Consumer>
        {({ createFave }) => {
          return (
            <TouchableOpacity
              onPress={() => createFave(this.props.id, new Date())}
            >
              <Icon
                style={{ fontSize: 25 }}
                name={(ios = "ios-heart-empty")}
                size={20}
                color="#999999"
              />
            </TouchableOpacity>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

// FaveItem.propTypes = {
//   id: PropTypes.string.isRequired
// };

// {
//   this.state.fave === true ? (
//     <Icon
//       style={{ fontSize: 25 }}
//       name={(ios = "ios-heart-empty")}
//       size={20}
//       color="red"
//     />
//   ) : (
//     <Icon
//       style={{ fontSize: 25 }}
//       name={(ios = "ios-heart-empty")}
//       size={20}
//       color="#999999"
//     />
//   )
// }

export default FaveItem;
