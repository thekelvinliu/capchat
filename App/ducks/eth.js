import Eth from 'ethjs';
import { REHYDRATE } from 'redux-persist/constants';

import config from '../config';

// functions
const createInstance = () => ({
  rpc: new Eth(new Eth.HttpProvider(config.providerUrl)),
  util: Eth
});

// actions
const CREATE = 'eth/CREATE';

// action creators
export const createEthInstance = () => ({
  type: CREATE,
  instance: createInstance()
});

// default to empty object
const defaultState = {};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return action.instance;
    // conditionally create the instance
    case REHYDRATE:
      return (action.payload.isRegistered)
        ? createInstance()
        : defaultState;
    default:
      return state;
  }
}
