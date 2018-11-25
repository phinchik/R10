import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ActivityIndicator, Text } from "react-native";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { formatSessionData } from "../../lib/helper";

const GET_SESSIONDATA = gql`
  query Session($filter: SessionFilter) {
    allSessions(filter: $filter) {
      location
      title
      id
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
        {({ faveIds }) => (
          <Query
            query={GET_SESSIONDATA}
            variables={{ SessionFilter: { id_in: faveIds } }}
          >
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>{error}</Text>;
              if (data) {
                return (
                  <Session
                    sessionId={this.props.navigation.state.params.key}
                    allSessions={formatSessionData(data.allSessions)[0].data}
                    sessionIds={faveIds}
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
