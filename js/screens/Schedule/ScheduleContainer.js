import React, { Component } from "react";
import Schedule from "./Schedule";
import { ActivityIndicator, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "../../lib/helper";
import FavesContext from "../../context/FavesContext/FavesProvider";

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
