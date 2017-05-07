import React, { Component } from 'react';
import { Alert, Button, Text, View } from 'react-native';

const style = {
  marginTop: 100,
  textAlign: 'center'
};

export default class extends Component {
  static navigationOptions = {
    title: 'capchat menu'
  };
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
          title="add contact"
          onPress={() =>
            navigate('AddContact', {
              from: routeName
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
                onPress: () => console.log('messages removed'),
                style: 'destructive'
              }, {
                text: 'cancel',
                onPress: () => console.log('messages removal canceled'),
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
                onPress: () => console.log('profile removed'),
                style: 'destructive'
              }, {
                text: 'cancel',
                onPress: () => console.log('profile removal canceled'),
                style: 'cancel'
              }]
            )
          }
        />
      </View>
    );
  }
}
