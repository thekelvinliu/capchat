import { combineReducers } from 'redux';

import contacts from './contacts';
import eth, { createEthInstance } from './eth';
import isRegistered, { completeRegistration, resetRegistration } from './isRegistered';
import loading from './loading';
import messages from './messages';
import username, { unsetUsername } from './username';
import wallet, { createWallet, removeWallet } from './wallet';

// registers user account
export const beginRegistration = () => dispatch =>
  Promise.all([
    // create a wallet
    dispatch(createWallet()),
    // create signal keys
    // dispatch(),
    // deploy contract
    // dispatch(),
    // create eth instance
    dispatch(createEthInstance()),
  ])
    // complete the registration
    .then(() => dispatch(completeRegistration()));

// deletes user account
export const removeAccount = () => dispatch =>
  Promise.all([
    // remove username
    dispatch(unsetUsername()),
    // remove wallet
    dispatch(removeWallet())
    // remove signal keys
    // dispatch(),
    // remove contract
    // dispatch(),
  ])
    // complete removal
    .then(() => dispatch(resetRegistration()));

export default combineReducers({
  contacts,
  eth,
  isRegistered,
  loading,
  messages,
  username,
  wallet
});
