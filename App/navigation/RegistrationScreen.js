import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import { setUsername } from '../ducks/account';
import { completeRegistration } from '../ducks/registration';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import TextPrompt from '../components/TextPrompt';

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
      <FlexWrapper>
        <Spinner
          visible={this.state.buttonPressed}
          textContent={`registering '${this.props.account.username}'...`}
        />
        <FlexItem>
          <Text>{copy}</Text>
        </FlexItem>
        <FlexItem>
          <TextPrompt
            prompt="username"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            maxLength={32}
            onChangeText={username => this.setState({ username })}
          />
        </FlexItem>
        <FlexItem>
          <TextPrompt
            prompt="password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </FlexItem>
        <FlexItem>
          <Button
            title="register"
            onPress={this._register}
            disabled={
              ['username', 'password'].some(k => this.state[k] === '')
              || this.state.buttonPressed
            }
          />
        </FlexItem>
      </FlexWrapper>
    );
  }
}

export default connect(state => state, { setUsername, completeRegistration })(RegistrationScreen);
