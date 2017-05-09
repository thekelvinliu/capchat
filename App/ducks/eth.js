import Eth from 'ethjs';
import SignerProvider from 'ethjs-provider-signer';
import { sign } from 'ethjs-signer';
import { REHYDRATE } from 'redux-persist/constants';

import config from '../config';

// functions
const createInstance = () => ({
  rpc: new Eth(new Eth.HttpProvider(config.providerUrl)),
  util: Eth
});

// actions
const CREATE = 'eth/CREATE';
const REMOVE = 'eth/REMOVE';

// action creators
export const createEthInstance = () => ({
  type: CREATE,
  instance: createInstance()
});
export const removeEthInstance = () => ({
  type: REMOVE
});

// default to nulls
const defaultState = {
  rpc: null,
  util: null
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return action.instance;
    // conditionally create the instance
    case REHYDRATE:
      return (action.payload.isRegistered)
        ? createInstance()
        : defaultState;
    case REMOVE:
      return defaultState;
    default:
      return state;
  }
}
