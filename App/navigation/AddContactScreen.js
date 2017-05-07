import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { addContact } from '../ducks/contacts';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import TextPrompt from '../components/TextPrompt';

class AddContactScreen extends Component {
  static navigationOptions = {
    title: 'add contact'
  };
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this._addContact = this._addContact.bind(this);
  }
  _addContact() {
    this.props.addContact(this.state.username.trim());
  }
  render() {
    return (
      <FlexWrapper>
        <FlexItem>
          <Text>please enter the username of the contact you would like to add.</Text>
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
          <Button
            title="add contact"
            onPress={this._addContact}
            disabled={this.state.username === ''}
          />
        </FlexItem>
      </FlexWrapper>
    );
  }
}

export default connect(null, { addContact })(AddContactScreen);
