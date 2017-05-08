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

// enhancements for store
const enhancements = compose(applyMiddleware(thunk, logger), autoRehydrate());
// create store
const store = createStore(reducers, {}, enhancements);
// make store persistent
const persist = persistStore(store, {
  blacklist: ['eth', 'loading'],
  storage: AsyncStorage
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
