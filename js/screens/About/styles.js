import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  logoContainer: {
    justifyContent: "center",
    alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",

    width: width,
    marginTop: 80
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Montserrat-Light"
  },
  headings: {
    fontSize: 30,
    marginBottom: 10,
    fontFamily: "Montserrat-Regular"
  },
  ScrollView: {
    width: width
  },
  view: {
    padding: 10
  }
});

export default styles;
