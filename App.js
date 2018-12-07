import React from 'react';
import { Button } from 'react-native';
import { Text, Item, Icon, Input } from 'native-base';
import Login from './app/Login';
import Direct from './app/Direct';
import Home from './app/Home';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const RootStack = createStackNavigator(
  {
    Direct: {
      screen: Direct,
      navigationOptions: {
        headerTitle: 'Direct',
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header:null,
      }
    },
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => {
        return {
        headerTitle: 'Instagram',
        headerLeft: (
          <Icon style={{color:'grey', marginLeft:20}} name="logo-instagram"/>
        ),
        headerRight: (
          <Icon style={{color:'grey', marginRight:20}} name="paper-plane" onPress={() => navigation.navigate('Direct')}/>
        ),
        }
      }
    }
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}