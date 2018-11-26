import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    height: height
  },
  location: {
    color: "#999999",
    width: width,
    marginTop: 20,
    fontSize: 20,
    fontFamily: "Montserrat-Light"
  },
  heart: {
    position: "absolute",
    right: 0,
    top: 0,
    fontSize: 20,
    marginTop: 20
  },
  title: {
    fontSize: 25,
    fontFamily: "Montserrat-Regular",
    marginTop: 10
  },
  time: {
    color: "red",
    fontFamily: "Montserrat-Light",
    marginTop: 20
  },
  description: {
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    marginTop: 20
  },

  speakerName: {
    fontFamily: "Montserrat-Light",
    fontSize: 18
  },
  sessionButton: {
    paddingVertical: 20,
    color: "green",
    fontSize: 16
  }
});

export default styles;
