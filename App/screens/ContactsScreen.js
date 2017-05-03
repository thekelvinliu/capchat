import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: (navigation.state.params.mode === 'browse') ? 'contacts' : 'new message',
    };
  }
  render() {
    return (
      <View>
        <Text style={style}>this is the contacts screen</Text>
        <Button
          title="contact 1"
          onPress={() => this.props.navigation.navigate('Chat', { username: 'contact 1' })}
        />
        <Button
          title="contact 2"
          onPress={() => this.props.navigation.navigate('Chat', { username: 'contact 2' })}
        />
        <Button
          title="contact 3"
          onPress={() => this.props.navigation.navigate('Chat', { username: 'contact 3' })}
        />
      </View>
    );
  }
}
