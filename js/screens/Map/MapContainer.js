import React, { Component } from "react";
import Map from "../Map";
import { View, Text } from "react-native";
// import { Query } from "react-apollo";
// import gql from "graphql";

// const GET_CONDUCT = gql`
//   query {
//     allConducts {
//       description
//     }
//   }
// `;

export default class MapContainer extends Component {
  render() {
    return (
      <View>
        <Map />
      </View>
    );
  }
}
