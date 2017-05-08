import { Wallet } from 'ethers';
import { REHYDRATE } from 'redux-persist/constants';

// functions
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
  const wallet = await Wallet.createRandom({});
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
