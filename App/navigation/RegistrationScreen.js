import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { setUsername } from '../ducks/account';
import { completeRegistration } from '../ducks/registration';

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

class RegistrationScreen extends Component {
  static navigationOptions = {
    title: 'welcome!'
  };
  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false,
      username: '',
      password: ''
    };
    this._register = this._register.bind(this);
  }
  _register() {
    this.setState({ buttonPressed: true });
    this.props.setUsername(this.state.username.trim());
    setTimeout(() => this.props.completeRegistration(), 1000);
  }
  render() {
    const copy = [
      'welcome to capchat!',
      '\n\n',
      'capchat is a secure and usable messaging platform. ',
      'to get started, all you need to do is register a username and create a password.'
    ].join('');
    return (
      <View style={styles.container}>
        <Text>{copy}</Text>
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
          <Text>password:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            placeholder="password"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.row}>
          <Button
            title="register"
            onPress={this._register}
            disabled={
              ['username', 'password'].some(k => this.state[k] === '')
              || this.state.buttonPressed
            }
          />
        </View>
        <Spinner
          visible={this.state.buttonPressed}
          textContent={`registering '${this.props.account.username}'...`}
        />
      </View>
    );
  }
}

export default connect(state => state, { setUsername, completeRegistration })(RegistrationScreen);
