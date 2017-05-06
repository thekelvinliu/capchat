import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

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
      title: (params.mode === 'self')
        ? 'my profile'
        : `${params.username}'s profile`,
      headerRight: (params.mode === 'self' || params.from === 'Chat')
        ? null
        : (
          <IconButton
            set={Entypo}
            name="chat"
            onPress={() =>
              navigate('Chat', {
                from: routeName,
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
        <Text style={style}>this is the profile screen</Text>
      </View>
    );
  }
}
