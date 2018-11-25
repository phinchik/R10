import React, { Component } from "react";
import Schedule from "./Schedule";
import { ActivityIndicator, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helper";

const GET_SCHEDULE = gql`
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
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;
          if (data) {
            return <Schedule sessions={formatSessionData(data.allSessions)} />;
          }
        }}
      </Query>
    );
  }
}
