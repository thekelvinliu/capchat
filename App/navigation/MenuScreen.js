import React, { Component } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { removeAccount } from '../ducks/account';
import { removeMessagesAll, removeMessagesFrom } from '../ducks/messages';
import { resetRegistration } from '../ducks/registration';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

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
      <View>
        <Text style={style}>this is the menu screen</Text>
        <Button
          title="my profile"
          onPress={() =>
            navigate('Profile', {
              from: routeName,
              mode: 'self'
            })
          }
        />
        <Button
          title="all contacts"
          onPress={() =>
            navigate('Contacts', {
              from: routeName,
              mode: 'browse'
            })
          }
        />
        <Text style={style}>danger zone</Text>
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
        <Button
          title="clear bob"
          onPress={() =>
            Alert.alert(
              'clear messages?',
              'this will permanently remove all messages from your phone. proceed with caution!',
              [{
                text: 'ok',
                onPress: () => this._removeMessages('bob'),
                style: 'destructive'
              }, {
                text: 'cancel',
                style: 'cancel'
              }]
            )
          }
        />
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
      </View>
    );
  }
}

export default connect(null, {
  removeAccount,
  removeMessagesAll,
  removeMessagesFrom,
  resetRegistration
})(MenuScreen);
