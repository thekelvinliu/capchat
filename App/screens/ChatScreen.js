import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: `chat with ${navigation.state.params.username}`,
      headerRight: (
        <Button
          title="profile"
          onPress={() => navigation.navigate('Profile', navigation.state.params)}
        />
      ),
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
