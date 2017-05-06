import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    const { params } = navigation.state;
    return {
      title: (params.mode === 'browse')
        ? 'contacts'
        : 'new message'
    };
  }
  render() {
    const { navigate, state } = this.props.navigation;
    const { params, routeName } = state;
    const target = (params.mode === 'browse') ? 'Profile' : 'Chat';
    return (
      <View>
        <Text style={style}>this is the contacts screen</Text>
        <Button
          title="contact 1"
          onPress={() =>
            navigate(target, {
              from: routeName,
              username: 'contact 1'
            })
          }
        />
        <Button
          title="contact 2"
          onPress={() =>
            navigate(target, {
              from: routeName,
              username: 'contact 2'
            })
          }
        />
        <Button
          title="contact 3"
          onPress={() =>
            navigate(target, {
              from: routeName,
              username: 'contact 3'
            })
          }
        />
      </View>
    );
  }
}
