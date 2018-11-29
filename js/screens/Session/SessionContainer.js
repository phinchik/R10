import gql from "graphql-tag";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { ActivityIndicator, Text } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";
import Session from "./Session";

const GET_SESSIONDATA = gql`
  query Session($id: ID) {
    Session(id: $id) {
      location
      title
      id
      startTime
      description
      speaker {
        name
        image
        id
        bio
      }
    }
  }
`;

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session",
    headerTintColor: "white"
  };
  render() {
    const { id } = this.props.navigation.state.params;
    return (
      <Query query={GET_SESSIONDATA} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;
          if (data) {
            return (
              <FavesContext.Consumer>
                {values => (
                  <Session
                    data={data.Session}
                    faveIds={values.faveIds}
                    methods={values}
                  />
                )}
              </FavesContext.Consumer>
            );
          }
        }}
      </Query>
    );
  }
}
