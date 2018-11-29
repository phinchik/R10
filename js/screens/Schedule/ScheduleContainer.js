import gql from "graphql-tag";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { ActivityIndicator, Text } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { formatSessionData } from "../../lib/helper";
import Schedule from "./Schedule";

const GET_SCHEDULE = gql`
  query {
    allSessions {
      id
      location
      startTime
      title
    }
  }
`;

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query query={GET_SCHEDULE}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>{error}</Text>;
          if (data) {
            return (
              <FavesContext.Consumer>
                {({ faveIds }) => {
                  return (
                    <Schedule
                      faveIds={faveIds}
                      sessions={formatSessionData(data.allSessions)}
                      navigation={this.props.navigation}
                    />
                  );
                }}
              </FavesContext.Consumer>
            );
          }
        }}
      </Query>
    );
  }
}
