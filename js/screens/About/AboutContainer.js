import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator } from "react-native";
import About from "./About";
import React, { Component } from "react";

const getQuery = gql`
  {
    allConducts {
      title
      description
      id
    }
  }
`;

class AboutContainer extends Component {
  static navigationOptions = {
    title: "About",
    headerTitleStyle: {
      color: "white",
      fontFamily: "Montserrat"
    }
  };
  render() {
    return (
      <Query query={getQuery}>
        {({ loading, error, data }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error</Text>;
          return <About data={data} />;
        }}
      </Query>
    );
  }
}

export default AboutContainer;
