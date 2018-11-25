import React, { Component } from "react";
import Faves from "./Faves";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import FavesContext from "../../context/FavesContext/FavesProvider";
import { ActivityIndicator, View, Text } from "react-native";
import { formatSessionData } from "../../lib/helper";

const GET_FAVES = gql`
  query($filter: SessionFilter) {
    allSessions(filter: $filter) {
      id
      title
      startTime
      location
      speaker {
        name
        id
        bio
        image
        url
      }
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };
  render() {
    return (
      <FavesContext.Consumer>
        {({ faveIds }) => (
          <Query
            query={GET_FAVES}
            variables={{ SessionFilter: { id_in: faveIds } }}
          >
            {({ loading, error, data }) => {
              if (loading) return <ActivityIndicator />;
              if (error) return <Text>{error}</Text>;
              if (data) {
                return (
                  <Faves
                    faves={formatSessionData(data.allSessions)}
                    faveIds={faveIds}
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

export default FavesContainer;
