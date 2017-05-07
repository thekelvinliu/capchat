import Eth from 'ethjs';

import React, { Component } from 'react';
import { Button, Platform, StatusBar, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import IconButton from '../components/IconButton';

const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));

const style = {
  marginTop: 10,
  textAlign: 'center'
};

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
    const texts = (this.state.isLoading)
      ? <Text style={style}>loading data from ethereum</Text>
      : Object.keys(this.state)
        .filter(k => k !== 'isLoading')
        .map(k => (
          <Text style={style} key={k}>{`the ${k} is ${this.state[k]}`}</Text>
        ));
    return (
      <View>
        <StatusBar hidden={Platform.OS === 'android'} />
        <Text style={style}>this is the menu screen</Text>
        <Button
          title="chat with alice"
          onPress={() =>
            navigate('Chat', {
              from: routeName,
              username: 'alice'
            })
          }
        />
        <Text style={style}>{`${Buffer.from('hello world').toString('hex')}`}</Text>
        {texts}
      </View>
    );
  }
}
