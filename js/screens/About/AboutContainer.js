import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import About from "./About";
import React, { Component } from "react";

class AboutContainer extends Component {
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              title
              description
            }
          }
        `}
      >
        {({ loading, error, data: { conducts } }) => {
          if (loading) return <Text> Loading... </Text>;
          if (error) return <Text> Error... </Text>;
          return <About conducts={conducts} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
