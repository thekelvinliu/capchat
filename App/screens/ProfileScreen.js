import React, { Component } from 'react';
import { Text, View } from 'react-native';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: (navigation.state.params.mode === 'self') ? 'my profile' : `${navigation.state.params.username}'s profile`
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
