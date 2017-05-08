import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import { autoRehydrate, persistStore } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import thunk from 'redux-thunk';

import App from './app';
import reducers from './ducks';

import './globals';

// enhancements for store
const enhancements = compose(applyMiddleware(thunk, logger), autoRehydrate());
// create store
const store = createStore(reducers, {}, enhancements);
// keys to not keep
const blacklist = ['eth', 'loading'];
const walletFilter = createBlacklistFilter('wallet', ['instance']);
// make store persistent
const persist = persistStore(store, {
  blacklist,
  storage: AsyncStorage,
  transforms: [walletFilter]
});

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
