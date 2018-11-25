import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, Text } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { formatSessionData } from "../../lib/helper";

const GET_SESSIONSPEAKER = gql`
  query Session($filter: SessionFilter) {
    allSessions(filter: $filter) {
      speaker {
        name
        image
        id
      }
    }
  }
`;

export default class SpeakerContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query
            query={GET_SESSIONSPEAKER}
            variables={{ SessionFilter: { id_in: faveIds } }}
          >
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>{error}</Text>;
              if (data) {
                return (
                  <Speaker
                    Id={this.props.navigation.state.params.key}
                    allSessionsSpeaker={
                      formatSessionData(data.allSessions)[0].data.speaker
                    }
                  />
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}
