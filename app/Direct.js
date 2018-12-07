import React from 'react';
import { View } from 'react-native';
import { Thumbnail, Text } from 'native-base';

export default class Direct extends React.Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Direct Message</Text>
      </View>
    );
  }
}
