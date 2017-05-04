import Eth from 'ethjs';

import React, { Component } from 'react';
import { Button, Platform, StatusBar, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import IconButton from '../components/IconButton';

const eth = new Eth(new Eth.HttpProvider('https://ropsten.infura.io'));
// const acc = '0xeb61b66ea48a8834d4099a6276982cc211b0604d';

const style = {
  marginTop: 100,
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
      blockNumber: '',
      isLoading: true
    };
  }
  componentDidMount() {
    // this.getBalance(acc).done();
    this.getBlockNumber().done();
    // this.setState({ isLoading: false });
  }
  // not working yet
  // async getBalance(account) {
  //   this.setState({
  //     balance: Eth.fromWei(await eth.getBalance(account), 'ether')
  //   });
  // }
  async getBlockNumber() {
    const bn = await eth.blockNumber();
    this.setState({
      blockNumber: bn.toString(),
      isLoading: false
    });
  }
  render() {
    return (
      <View>
        <StatusBar hidden={Platform.OS === 'android'} />
        <Text style={style}>this is the menu screen</Text>
        <Button
          title="chat with alice"
          onPress={() => this.props.navigation.navigate('Chat', { username: 'alice' })}
        />
        <Text style={style}>{
          (this.state.isLoading)
            ? 'loading block number'
            : `the current block number is ${this.state.blockNumber}`
        }</Text>
      </View>
    );
  }
}
