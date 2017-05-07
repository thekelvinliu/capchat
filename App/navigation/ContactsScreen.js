import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import IconButton from '../components/IconButton';

export default class extends Component {
  static navigationOptions({ navigation }) {
    const { navigate, state } = navigation;
    const { params, routeName } = state;
    return {
      title: (params.mode === 'browse')
        ? 'contacts'
        : 'new message',
      headerRight: (params.mode === 'new')
        ? null
        : (
          <IconButton
            set={Entypo}
            name="add-user"
            onPress={() =>
              navigate('AddContact', {
                from: routeName
              })
            }
          />
        )
    };
  }
  render() {
    const { navigate, state } = this.props.navigation;
    const { params, routeName } = state;
    const target = (params.mode === 'browse') ? 'Profile' : 'Chat';
    return (
      <FlexWrapper>
        <FlexItem>
          <Text>this is the contacts screen</Text>
        </FlexItem>
        <FlexItem>
          <Button
            title="alice"
            onPress={() =>
              navigate(target, {
                from: routeName,
                username: 'alice'
              })
            }
          />
        </FlexItem>
        <FlexItem>
          <Button
            title="bob"
            onPress={() =>
              navigate(target, {
                from: routeName,
                username: 'bob'
              })
            }
          />
        </FlexItem>
        <FlexItem>
          <Button
            title="claire"
            onPress={() =>
              navigate(target, {
                from: routeName,
                username: 'claire'
              })
            }
          />
        </FlexItem>
        <FlexItem>
          <Button
            title="dave"
            onPress={() =>
              navigate(target, {
                from: routeName,
                username: 'dave'
              })
            }
          />
        </FlexItem>
      </FlexWrapper>
    );
  }
}
