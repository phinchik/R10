import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    fontSize: 20,
    marginRight: 5,
    marginLeft: 5
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
    marginBottom: 10,
    width: width
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  headings: {
    fontSize: 30,
    marginBottom: 10
  }
});

export default styles;
