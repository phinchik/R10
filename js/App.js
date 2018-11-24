import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigation/RootStackNavigator";
import { FavesProvider } from "../js/context/FavesContext/FavesProvider";
import { ApolloProvider } from "react-apollo";
import client from "./config/api";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <AppNavigator />
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
