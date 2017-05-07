import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import App from './app';
import reducers from './ducks';

import './globals';

// the initial app state
const initial = {
  isRegistered: false,
  // messages: {
  //   alice: [
  //     {
  //       type: 'from',
  //       body: 'hey'
  //     },
  //     {
  //       type: 'to',
  //       body: 'hello'
  //     }
  //   ],
  //   bob: [
  //     {
  //       type: 'to',
  //       body: 'hello'
  //     },
  //     {
  //       type: 'from',
  //       body: 'world'
  //     }
  //   ]
  // }
};
// redux enhancements
const enhancements = compose(applyMiddleware(thunk, logger), autoRehydrate());
// create redux store
const store = createStore(reducers, initial, enhancements);
// make store persistent
const persist = persistStore(store, { storage: AsyncStorage });

// hacky way to purge if needed
const shouldPurge = false;
if (shouldPurge) persist.purge();

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
