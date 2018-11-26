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
        {({ faveIds, getAllFaves }) => {
          return (
            <Query
              query={GET_FAVES}
              variables={{ SessionFilter: { id_in: faveIds } }}
            >
              {({ loading, error, data }) => {
                if (loading) return <ActivityIndicator />;
                if (error) return <Text>{error}</Text>;
                if (data) {
                  const faves = faveIds.map(fave => Object.assign({}, fave));

                  const ids = [];

                  for (let i = 0; i < faves.length; i++) {
                    ids.push(faves[i].id);
                  }

                  const favList = data.allSessions.filter(session => {
                    if (ids.includes(session.id)) {
                      return session;
                    }
                  });
                  return <Faves favList={formatSessionData(favList)} />;
                }
              }}
            </Query>
          );
        }}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
