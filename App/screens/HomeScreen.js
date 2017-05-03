import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: 'capchat',
      headerLeft: (
        <Button
          title="menu"
          onPress={() => navigation.navigate('Menu')}
        />
      ),
      headerRight: (
        <Button
          title="new message"
          onPress={() => navigation.navigate('Contacts', { mode: 'msg' })}
        />
      ),
    };
  }
  render() {
    return (
      <View>
        <Text style={style}>this is the menu screen</Text>
        <Button
          title="chat with alice"
          onPress={() => this.props.navigation.navigate('Chat', { username: 'alice' })}
        />
      </View>
    );
  }
}
