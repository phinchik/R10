import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    height: 50,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10
  },
  header: {
    backgroundColor: "#e6e6e6",
    width: width,
    height: 25,
    paddingLeft: 10
  },
  heart: {
    color: "red",
    fontSize: 20,
    paddingTop: 10
  }
});

export default styles;
