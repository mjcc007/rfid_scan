import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import LottieView from 'lottie-react-native';

export default class WelcomePage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation,
      });
    }, 2000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.WelcomePage}>WelcomePage</Text>
        <LottieView source={require('./PinJump.json')} autoPlay loop />
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
