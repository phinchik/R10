import gql from "graphql-tag";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { ActivityIndicator, Text } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { formatSessionData } from "../../lib/helper";
import Session from "./Session";
import LinearGradient from "react-native-linear-gradient";

const GET_SESSIONDATA = gql`
  query Session($filter: SessionFilter) {
    allSessions(filter: $filter) {
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
    title: "Session"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds, createFave, deleteFave }) => {
          return (
            <Query
              query={GET_SESSIONDATA}
              variables={{ SessionFilter: { id_in: faveIds } }}
            >
              {({ loading, error, data }) => {
                const ids = [];

                for (let i = 0; i < faveIds.length; i++) {
                  ids.push(faveIds[i].id);
                }

                if (loading) return <ActivityIndicator />;
                if (error) return <Text>{error}</Text>;
                if (data) {
                  return (
                    <Session
                      sessionId={this.props.navigation.state.params.key}
                      allSessions={formatSessionData(data.allSessions)}
                      sessionIds={faveIds}
                      createFave={createFave}
                      deleteFave={deleteFave}
                      favouriteId={ids}
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
