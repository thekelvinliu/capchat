import React, { Component } from 'react';
import { connect } from 'react-redux';
import Root, { Loading, Registration } from './navigation';

class App extends Component {
  render() {
    let Screen;
    if (this.props.loading)
      Screen = Loading;
    else if (!this.props.isRegistered)
      Screen = Registration;
    else
      Screen = Root;
    return <Screen />;
  }
}

export default connect(({
  isRegistered,
  loading
}) => ({
  isRegistered,
  loading
}))(App);
