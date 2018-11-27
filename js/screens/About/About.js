import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import ConductItem from "../../components/ConductItem";
import styles from "./styles";
import PropTypes from "prop-types";

const About = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/r10_logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.ScrollView}>
        <ScrollView style={styles.view}>
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

          <View>
            {data.allConducts.map(conduct => {
              return <ConductItem conduct={conduct} key={conduct.id} />;
            })}
          </View>

          <View style={styles.aboutFooter}>
            <Text>© RED Academy 2017</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
