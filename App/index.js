import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import App from './app';
import reducers from './ducks';
import './globals';

// some configuration for the store
const initial = {
  isRegistered: false,
  messages: {
    alice: [
      {
        type: 'from',
        body: 'hey'
      },
      {
        type: 'to',
        body: 'hello'
      }
    ],
    bob: [
      {
        type: 'to',
        body: 'hello'
      },
      {
        type: 'from',
        body: 'world'
      }
    ]
  }
};
const middlewares = applyMiddleware(thunk, logger);
// create the redux store
const store = createStore(reducers, initial, middlewares);

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
