import React, {Component} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {
  init,
  Geolocation,
  stop,
  start,
  setInterval,
  addLocationListener,
} from 'react-native-amap-geolocation';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: '',
      latitude: '',
      city: '',
      district: '',
      street: '',
      position: '',
    };
  }
  componentDidMount = () => {
    this.getPositions();
  };
  componentWillUnmount() {
    stop();
  }

  getPositions = async () => {
    // 对于 Android 需要自行根据需要申请权限
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
    }
    // 使用自己申请的高德 App Key 进行初始化
    await init({
      android: '926ef8c142499bf5499f358a3302351d',
    });
    setInterval(10000);
    addLocationListener(location => console.log(location));
    start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.WelcomePage}>HomePage</Text>
        <Text style={styles.instructions}>经度：{this.state.longitude}</Text>
        <Text style={styles.instructions}>纬度：{this.state.latitude}</Text>
        <Text style={styles.instructions}>城市：{this.state.city}</Text>
        <Text style={styles.instructions}>区域：{this.state.district}</Text>
        <Text style={styles.instructions}>街道：{this.state.street}</Text>
        <Text style={styles.instructions}>详细位置：{this.state.position}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  WelcomePage: {
    color: 'yellow',
    fontSize: 30,
  },
});
