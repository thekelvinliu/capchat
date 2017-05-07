import React, { Component } from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import IconButton from '../components/IconButton';

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
      <FlexWrapper>
        <FlexItem>
          <Text>this is the chat screen</Text>
        </FlexItem>
      </FlexWrapper>
    );
  }
}
