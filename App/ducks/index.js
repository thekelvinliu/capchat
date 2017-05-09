import { combineReducers } from 'redux';

import contacts from './contacts';
import eth, { createEthInstance, removeEthInstance } from './eth';
import isRegistered, { completeRegistration, resetRegistration } from './isRegistered';
import loading from './loading';
import messages from './messages';
import username, { setUsername, unsetUsername } from './username';
import wallet, { createWallet, removeWallet } from './wallet';

// registers user account
export const beginRegistration = _username => dispatch =>
  Promise.all([
    dispatch(setUsername(_username)),
    dispatch(createEthInstance()),
    dispatch(createWallet()),
    // create signal keys
    // deploy contract
  ])
    // complete the registration
    .then(() => dispatch(completeRegistration()));

// deletes user account
export const removeAccount = () => dispatch =>
  Promise.all([
    dispatch(unsetUsername()),
    dispatch(removeWallet()),
    dispatch(removeEthInstance()),
    // remove signal keys
    // remove contract
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
