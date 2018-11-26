import { Dimensions, StyleSheet } from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,
    height: height
  },
  location: {
    color: "#999999",
    width: width,
    marginTop: 30,
    fontSize: 30,
    fontFamily: "Montserrat-Light"
  },
  heart: {
    position: "absolute",
    right: 0,
    top: 0,
    fontSize: 25
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
    color: "yellow",
    fontSize: 40,
    textAlign: "center",
    margin: "auto",
    fontFamily: "Montserrat-Light"
  },
  linearGradient: {
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    alignItems: "center"
  },
  location: {
    color: "#999999",
    fontFamily: "Montserrat-Light",
    marginBottom: 5,
    paddingRight: 10,
    paddingLeft: 10
  },
  presentedBy: {
    color: "#999999",
    width: width,
    marginTop: 30,
    fontSize: 20,
    fontFamily: "Montserrat-Light"
  },
  gradientContainer: {
    marginLeft: 50
  }
});

export default styles;
