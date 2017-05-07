import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const $colors = {
  gray: 'gray',
  white: 'white'
};

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  input: {
    height: 32,
    backgroundColor: $colors.white,
    borderColor: $colors.gray,
    borderWidth: 1,
  },
  row: {
    marginTop: 5
  }
});

export default class extends Component {
  static navigationOptions = {
    title: 'add contact'
  };
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>username:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            maxLength={32}
            placeholder="username"
            onChangeText={username => this.setState({ username })}
          />
        </View>
        <View style={styles.row}>
          <Button
            title="add contact"
            onPress={() => console.log(`trying to add ${this.state.username}`)}
            disabled={this.state.username === ''}
          />
        </View>
      </View>
    );
  }
}
