import Eth from 'ethjs';

import React, { Component } from 'react';
import { Button, Platform, StatusBar, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import IconButton from '../components/IconButton';

const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));

export default class extends Component {
  static navigationOptions({ navigation }) {
    const { navigate, state } = navigation;
    const { routeName } = state;
    return {
      title: 'capchat',
      headerLeft: (
        <IconButton
          set={Entypo}
          name="menu"
          onPress={() =>
            navigate('Menu', {
              from: routeName
            })
          }
        />
      ),
      headerRight: (
        <IconButton
          set={Entypo}
          name="new-message"
          onPress={() =>
            navigate('Contacts', {
              from: routeName,
              mode: 'new'
            })
          }
        />
      )
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  componentWillMount() {
    this.getData().done();
  }
  async getData() {
    const balance = Eth.fromWei(
      await eth.getBalance('0xeb61b66ea48a8834d4099a6276982cc211b0604d'),
      'ether'
    );
    const blockNumber = await eth.blockNumber();
    this.setState({
      balance,
      blockNumber,
      isLoading: false
    });
  }
  render() {
    const { navigate, state } = this.props.navigation;
    const { routeName } = state;
    let texts;
    if (this.state.isLoading)
      texts = (
        <FlexItem>
          <Text>loading info from ethereum blockchain</Text>
        </FlexItem>
      );
    else
      texts = Object.keys(this.state)
        .filter(k => k !== 'isLoading')
        .map(k => (
          <FlexItem key={k}>
            <Text>{`the ${k} is ${this.state[k]}`}</Text>
          </FlexItem>
        ));
    return (
      <FlexWrapper>
        <StatusBar hidden={Platform.OS === 'android'} />
        <FlexItem>
          <Text>this is the home screen</Text>
        </FlexItem>
        <FlexItem>
          <Text>links to recent chats will appear here</Text>
        </FlexItem>
        <FlexItem>
          <Button
            title="chat with alice"
            onPress={() =>
              navigate('Chat', {
                from: routeName,
                username: 'alice'
              })
            }
          />
        </FlexItem>
        {texts}
      </FlexWrapper>
    );
  }
}
