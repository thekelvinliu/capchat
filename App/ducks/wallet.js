import config from '../config';

// functions
const issueWallet = () =>
  config.wallets[Math.floor(Math.random() * config.wallets.length)];

// actions
const CREATE = 'wallet/CREATE';
const REMOVE = 'wallet/REMOVE';

// action creators
export const createWallet = () => ({
  type: CREATE,
  wallet: issueWallet()
});
export const removeWallet = () => ({
  type: REMOVE
});

// default to nulls
const defaultState = {
  address: null,
  mnemonic: null,
  privateKey: null
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return action.wallet;
    case REMOVE:
      return defaultState;
    default:
      return state;
  }
}
