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
    return {
      title: 'capchat',
      headerLeft: (
        <IconButton
          set={Entypo}
          name="menu"
          onPress={() => navigation.navigate('Menu')}
        />
      ),
      headerRight: (
        <IconButton
          set={Entypo}
          name="new-message"
          onPress={() => navigation.navigate('Menu')}
        />
      ),
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      balance: '0',
      blockNumber: '0'
    };
  }
  componentDidMount() {
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
      blockNumber
    });
  }
  render() {
    const texts = Object.keys(this.state).map(k => (
      <Text style={style} key={k}>{`the ${k} is ${this.state[k]}`}</Text>
    ));
    return (
      <View>
        <StatusBar hidden={Platform.OS === 'android'} />
        <Text style={style}>this is the menu screen</Text>
        <Button
          title="chat with alice"
          onPress={() => this.props.navigation.navigate('Chat', { username: 'alice' })}
        />
        {texts}
      </View>
    );
  }
}
