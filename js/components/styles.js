import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemTitle: {
    marginBottom: 10,
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
    marginTop: 10
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
  speakerDescription: {
    fontFamily: "Montserrat-Light",
    fontSize: 18
  },
  buttonX: {
    position: "absolute",
    left: 0,
    top: 0
  }
});

export default styles;
