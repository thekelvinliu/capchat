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
    return {
      title: `chat with ${navigation.state.params.username}`,
      headerRight: (
        <IconButton
          set={Ionicons}
          name="md-person"
          onPress={() => navigation.navigate('Menu')}
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
