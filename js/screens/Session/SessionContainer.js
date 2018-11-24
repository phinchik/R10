import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text } from "react-native";
import { FavesContext } from "../../context/FavesContext/FavesProvider";

const GET_SESSIONDATA = gql`
  query Session($filter: SessionFilter) {
    allSessions(filter: $filter) {
      location
      title
      description
      speaker {
        name
        image
        id
      }
    }
  }
`;

export default class SessionContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveId }) => {
          <View>
            <Query
              query={GET_SESSIONDATA}
              variables={{ filter: { id_in: faveIds } }}
            >
              {({ loading, error, data }) => {
                if (loading) return <Text>Loading</Text>;
                if (error) return `Error, ${error.message}`;
                if (data) {
                  return <Session sessions={data} />;
                }
              }}
            </Query>
          </View>;
        }}
      </FavesContext.Consumer>
    );
  }
}
