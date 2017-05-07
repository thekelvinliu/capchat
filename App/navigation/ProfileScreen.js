import React, { Component } from 'react';
import { Alert, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

import { removeContact } from '../ducks/contacts';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import IconButton from '../components/IconButton';

class ProfileScreen extends Component {
  static navigationOptions({ navigation }) {
    const { navigate, state } = navigation;
    const { params, routeName } = state;
    return {
      title: (params.mode === 'self')
        ? 'my profile'
        : `${params.username}'s profile`,
      headerRight: (params.mode === 'self' || params.from === 'Chat')
        ? null
        : (
          <IconButton
            set={Entypo}
            name="chat"
            onPress={() =>
              navigate('Chat', {
                from: routeName,
                username: params.username
              })
            }
          />
        )
    };
  }
  constructor(props) {
    super(props);
    this._removeContact = this._removeContact.bind(this);
  }
  _removeContact() {
    const { goBack, state } = this.props.navigation;
    const { params } = state;
    this.props.removeContact(params.username);
    goBack();
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <FlexWrapper>
        <FlexItem>
          <Text>this is the profile screen</Text>
        </FlexItem>
        <FlexItem>
          <Button
            title={`remove ${params.username}`}
            onPress={() =>
              Alert.alert(
                'are you sure?',
                `${params.username} will permanently be removed. proceed with caution!`,
                [{
                  text: 'ok',
                  onPress: this._removeContact,
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

export default connect(null, { removeContact })(ProfileScreen);
