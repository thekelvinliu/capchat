import { Wallet } from 'ethers';
import { REHYDRATE } from 'redux-persist/constants';

import config from '../config';

// index for the wallets in config
let walletIndex = 0;

// functions
const issueWallet = () => {
  // the wallet to issue
  const retval = config.wallets[walletIndex];
  // increment index but stay within bounds
  walletIndex++;
  walletIndex %= config.wallets.length;
  // return the wallet
  return retval;
};
const loadWallet = phrase => ((phrase) ? Wallet.fromMnemonic(phrase) : null);

// actions
const ADD_MNEMONIC = 'wallet/ADD_MNEMONIC';
const ADD_WALLET = 'wallet/ADD_WALLET';
const REMOVE_WALLET = 'wallet/REMOVE_WALLET';

// action creators
export const addMnenomic = mnemonic => ({
  type: ADD_MNEMONIC,
  mnemonic
});
export const addWallet = instance => ({
  type: ADD_WALLET,
  instance
});
export const removeWallet = () => ({
  type: REMOVE_WALLET
});
// thunks
export const createWallet = () => async dispatch => {
  // use wallets preloaded with ether instead of completely new wallets
  // const wallet = await Wallet.createRandom({});
  // issue a wallet
  const { mnemonic } = issueWallet();
  // load actual wallet instance
  const wallet = await loadWallet(mnemonic);
  // dispatch actions
  dispatch(addMnenomic(wallet.mnemonic));
  dispatch(addWallet(wallet));
};

// default to nulls
const defaultState = {
  instance: null,
  mnemonic: null
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_MNEMONIC:
      return {
        ...state,
        mnemonic: action.mnemonic
      };
    case ADD_WALLET:
      return {
        ...state,
        instance: action.instance
      };
    case REHYDRATE:
      const { mnemonic } = action.payload.wallet || state;
      return {
        instance: loadWallet(mnemonic),
        mnemonic
      };
    case REMOVE_WALLET:
      return defaultState;
    default:
      return state;
  }
}
