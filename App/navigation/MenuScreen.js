import React, { Component } from 'react';
import { Alert, Button, Text } from 'react-native';
import { connect } from 'react-redux';

import { removeAccount } from '../ducks/account';
import { removeMessagesAll } from '../ducks/messages';
import { resetRegistration } from '../ducks/registration';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';

class MenuScreen extends Component {
  static navigationOptions = {
    title: 'capchat menu'
  };
  constructor(props) {
    super(props);
    this._removeMessages = this._removeMessages.bind(this);
    this._removeProfile = this._removeProfile.bind(this);
  }
  _removeMessages(username) {
    if (!username)
      this.props.removeMessagesAll();
    else
      this.props.removeMessagesFrom(username);
  }
  _removeProfile() {
    this.props.removeAccount();
    this.props.resetRegistration();
  }
  render() {
    const { navigate, state } = this.props.navigation;
    const { routeName } = state;
    return (
      <FlexWrapper>
        <FlexItem>
          <Text>this is the menu screen</Text>
        </FlexItem>
        <FlexItem>
          <Button
            title="my profile"
            onPress={() =>
              navigate('Profile', {
                from: routeName,
                mode: 'self'
              })
            }
          />
        </FlexItem>
        <FlexItem>
          <Button
            title="all contacts"
            onPress={() =>
              navigate('Contacts', {
                from: routeName,
                mode: 'browse'
              })
            }
          />
        </FlexItem>
        <FlexItem>
          <Text>danger zone</Text>
        </FlexItem>
        <FlexItem>
          <Button
            title="clear messages"
            onPress={() =>
              Alert.alert(
                'clear messages?',
                'this will permanently remove all messages from your phone. proceed with caution!',
                [{
                  text: 'ok',
                  onPress: this._removeMessages,
                  style: 'destructive'
                }, {
                  text: 'cancel',
                  style: 'cancel'
                }]
              )
            }
          />
        </FlexItem>
        <FlexItem>
          <Button
            title="remove profile"
            onPress={() =>
              Alert.alert(
                'remove profile?',
                'this will permanently remove this profile from your phone. proceed with caution!',
                [{
                  text: 'ok',
                  onPress: this._removeProfile,
                  style: 'destructive'
                }, {
                  text: 'cancel',
                  style: 'cancel'
                }]
              )
            }
          />
        </FlexItem>
      </FlexWrapper>
    );
  }
}

export default connect(null, {
  removeAccount,
  removeMessagesAll,
  resetRegistration
})(MenuScreen);
