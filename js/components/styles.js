import { StyleSheet, Dimensions } from "react-native";

var height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  itemTitle: {
    marginBottom: 10,
    color: "#9963ea",
    fontSize: 20,
    fontFamily: "Montserrat-Light",
    flexDirection: "row"
  },
  conductTitle: {
    alignSelf: "center",
    color: "#9963ea",
    fontSize: 20,
    fontFamily: "Montserrat-Light"
  },
  itemDescription: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "Montserrat-Light"
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 15,
    marginLeft: 10,
    borderRadius: 23
  },
  AboutText: {
    color: "#999999",
    fontFamily: "Montserrat-Light",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 15
  },
  speaker: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: "#C5C6C5",
    borderBottomWidth: 1,
    marginBottom: 15
  },
  speakerName: {
    fontFamily: "Montserrat-Light",
    justifyContent: "center",
    fontSize: 22,
    marginTop: 30,
    marginLeft: 10
  },
  bio: {
    color: "black",
    fontSize: 16,
    fontFamily: "Montserrat-Light",
    marginLeft: 10,
    marginRight: 5,
    marginTop: 20
  },
  name: {
    color: "black",
    fontSize: 26,
    fontFamily: "Montserrat-Regular",
    alignSelf: "center"
  },
  speakerDescription: {
    fontFamily: "Montserrat-Light",
    fontSize: 18,
    color: "black"
  },
  X: {
    color: "white",
    fontFamily: "Montserrat-Light",
    marginTop: 10,
    marginLeft: 10
  },
  speakerContainer: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10
  },
  root: {
    backgroundColor: "black",
    height: height,
    marginTop: 20
  },
  title: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
    color: "white"
  },
  aboutImage: {
    width: 130,
    height: 130,
    marginTop: 10,
    marginLeft: 80,
    borderRadius: 65,
    marginBottom: 10
  },
  linearGradient: {
    height: 50,
    width: 250,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "center"
  },
  linearText: {
    color: "white",
    alignSelf: "center",
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    marginTop: 10
  }
});

export default styles;
