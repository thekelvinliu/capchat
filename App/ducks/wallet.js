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
