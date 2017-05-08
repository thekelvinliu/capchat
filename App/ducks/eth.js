// creates eth instance on rehydrate
import Eth from 'ethjs';
import { REHYDRATE } from 'redux-persist/constants';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      return {
        rpc: new Eth(new Eth.HttpProvider('https://ropsten.infura.io')),
        util: Eth,
      };
    default:
      return state;
  }
}
