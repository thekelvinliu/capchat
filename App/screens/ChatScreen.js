import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import IconButton from '../components/IconButton';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    const { navigate, state } = navigation;
    const { params, routeName } = state;
    return {
      title: `chat with ${params.username}`,
      headerRight: (params.from === 'Profile')
        ? null
        : (
          <IconButton
            set={Ionicons}
            name="md-person"
            onPress={() =>
              navigate('Profile', {
                from: routeName,
                mode: 'friend',
                username: params.username
              })
            }
          />
        )
    };
  }
  render() {
    return (
      <View>
        <Text style={style}>this is the chat screen</Text>
      </View>
    );
  }
}
