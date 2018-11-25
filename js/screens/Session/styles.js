import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F5FCFF",
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
    marginTop: 20,
    color: "red"
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
  text: {
    color: "#999999",
    fontFamily: "Montserrat-Light",
    fontSize: 20
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 23
  },
  speakerName: {
    fontFamily: "Montserrat-Light",
    fontSize: 18
  }
});

export default styles;
