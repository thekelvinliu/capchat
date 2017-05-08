import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default class extends Component {
  static navigationOptions = {
    title: 'capchat'
  };
  render() {
    return (
      <Spinner visible textContent="loading capchat..." />
    );
  }
}
