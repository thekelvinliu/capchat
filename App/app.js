import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigator, { Registration } from './navigation';

class App extends Component {
  render() {
    return (this.props.isRegistered) ? <Navigator /> : <Registration />;
  }
}

export default connect(({ isRegistered }) => ({ isRegistered }))(App);
