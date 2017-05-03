import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import IconButton from '../components/IconButton';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions({ navigation }) {
    return {
      title: 'capchat',
      headerLeft: (
        <IconButton
          set={Entypo}
          name="menu"
          onPress={() => navigation.navigate('Menu')}
        />
      ),
      headerRight: (
        <IconButton
          set={Entypo}
          name="new-message"
          onPress={() => navigation.navigate('Menu')}
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
