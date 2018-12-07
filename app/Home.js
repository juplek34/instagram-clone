import React from 'react';
import { Icon, Container, Text } from 'native-base';
import Isi from './Isi';

import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';

class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
          <Text>Halaman Profil</Text>
      </Container>
    );
  }
}

class ExploreScreen extends React.Component {
  render() {
    return (
      <Container>
          <Text>Halaman Explore</Text>
      </Container>
    );
  }
}


class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
          <Isi/>
      </Container>
    );
  }
}

class AddScreen extends React.Component {
  render() {
    return (
      <Container>
          <Text>Halaman tambah poto</Text>
      </Container>
    );
  }
}

class NotifScreen extends React.Component {
  render() {
    return (
      <Container>
          <Text>Halaman Notifikasi</Text>
      </Container>
    );
  }
}

const HomeStack = createBottomTabNavigator({
  1: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='home' />,
    }
  },
  2: {
    screen: ExploreScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='search' />,
    }
  },
  3: {
    screen: AddScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='add-circle'/>,
    }
  },
  4: {
    screen: NotifScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='heart'/>,
    }
  },
  5: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused })=> <Icon 
      style = {{ color: tintColor }}
      name='person' />,
    }
  }
  },
  {
    tabBarOptions: {
        tabStyle: {
          },
        activeTintColor: '#000',
            height: 50,
        inactiveTintColor: 'grey',    
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
          backgroundColor: 'grey',
        },
        style: {
          backgroundColor: '#fff',
        },
      }
});

export default createAppContainer(HomeStack);
