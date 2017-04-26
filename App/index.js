import React, { Component } from 'react';
import { Text } from 'react-native';

const simple = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  render() {
    return (
      <Text style={simple}>hello world</Text>
    );
  }
}
