/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

type Props = {};

import Fade from "./components/Fade";
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Fade style={styles.item} duration={300}>
          <Text>Hello world center center center scsdgsdklgkdslgsdkl;;'</Text>
        </Fade>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  item: {
    width: 200,
    height: 450,
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
