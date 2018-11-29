import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6"
  },
  header: {
    backgroundColor: "#e6e6e6",
    width: width,
    height: 25,
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: "Montserrat-Light"
  },
  heart: {
    fontSize: 20,
    marginTop: 20,
    position: "absolute",
    top: 0,
    right: 10
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    width: width,
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  location: {
    color: "#999999",
    fontFamily: "Montserrat-Light",
    marginBottom: 5,
    paddingRight: 10,
    paddingLeft: 10
  }
});

export default styles;
