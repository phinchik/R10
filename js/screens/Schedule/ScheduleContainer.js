import React, { Component } from "react";
import Schedule from "./Schedule";
import { Text, View } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helper";
import { FavesContext } from "../../context/FavesContext/FavesProvider";

const GET_SESSION = gql`
  query {
    allSessions {
      description
      id
      location
      startTime
      title
    }
  }
`;

export default class ScheduleContainer extends Component {
  render() {
    return (
      <View>
        <Query query={GET_SESSION}>
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading</Text>;
            if (error) return `Error, ${error.message}`;
            if (data) {
              return (
                <Schedule sessions={formatSessionData(data.allSessions)} />
              );
            }
          }}
        </Query>
      </View>
    );
  }
}
