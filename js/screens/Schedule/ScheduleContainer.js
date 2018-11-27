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
      description
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
      <FavesContext.Consumer>
        {({ faveIds }) => {
          return (
            <Query query={GET_SCHEDULE}>
              {({ loading, error, data }) => {
                const ids = [];

                for (let i = 0; i < faveIds.length; i++) {
                  ids.push(faveIds[i].id);
                }

                if (loading) return <ActivityIndicator />;
                if (error) return <Text>{error}</Text>;
                if (data) {
                  return (
                    <Schedule
                      faveIds={ids}
                      sessions={formatSessionData(data.allSessions)}
                    />
                  );
                }
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}
