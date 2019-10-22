import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ScanPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.WelcomePage}>Scan Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  WelcomePage: {
    color: 'blue',
    fontSize: 30,
  },
});
