import React, { Component } from 'react';
import { Button, Platform, StatusBar, Text } from 'react-native';
import { connect } from 'react-redux';
import { Entypo } from '@expo/vector-icons';

import FlexItem from '../components/FlexItem';
import FlexWrapper from '../components/FlexWrapper';
import IconButton from '../components/IconButton';

class HomeScreen extends Component {
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
    const { eth, wallet } = this.props;
    const balance = eth.util.fromWei(
      await eth.rpc.getBalance(wallet.account),
      'ether'
    );
    const blockNumber = await eth.rpc.blockNumber();
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

export default connect(({
  eth,
  wallet
}) => ({
  eth,
  wallet
}))(HomeScreen);
