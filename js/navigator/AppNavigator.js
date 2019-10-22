import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import WelcomPage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import ScanPage from '../pages/ScanPage';

const InitNavigator = createStackNavigator({
  WelcomPage: {
    screen: WelcomPage,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null,
    },
  },
  ScanPage: {
    screen: ScanPage,
    navigationOptions: {
      header: null,
    },
  },
});

export default createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);
