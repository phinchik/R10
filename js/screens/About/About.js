import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import styles from "./styles";

const About = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/r10_logo.png")}
          style={styles.logo}
        />
      </View>
      <View>
        <ScrollView>
          <Text style={styles.text}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.headings}>Date & Venue</Text>
          <Text style={styles.text}>
            The R10 conference will take place on Tuesday, June 27th, 2017 in
            Vancouver, BC.
          </Text>
          <Text style={styles.headings}>Code of Conduct</Text>

          <View style={styles.aboutFooter}>
            <Text>© RED Academy 2017</Text>
          </View>
          <View />
        </ScrollView>
      </View>
    </View>
  );
};

export default About;

{
  /* <View>
  {data.allConducts.map(conduct => {
    return (
      <View key={conduct.id}>
        <TouchableHighlight
          underlayColor="gray"
          activeOpacity={0.6}
          onPress={() =>
            this.setState({ show: !this.state.show })
          }
        >
          <View>
            <Text style={styles.headings}>{conduct.title}</Text>
          </View>
        </TouchableHighlight>
        {this.state.show && (
          <View>
            <Text style={styles.text}>{conduct.description}</Text>
          </View>
        )}
      </View>
    );
  })}
</View> */
}
