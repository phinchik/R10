import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width;

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
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6"
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
