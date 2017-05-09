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
const CREATE_WALLET = 'wallet/CREATE_WALLET';
const REMOVE_WALLET = 'wallet/REMOVE_WALLET';

// action creators
export const createWallet = () => ({
  type: CREATE_WALLET,
  wallet: issueWallet()
});
export const removeWallet = () => ({
  type: REMOVE_WALLET
});

// default to nulls
const defaultState = {
  address: null,
  mnemonic: null,
  privateKey: null
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE_WALLET:
      return action.wallet;
    case REMOVE_WALLET:
      return defaultState;
    default:
      return state;
  }
}
