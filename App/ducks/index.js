import { combineReducers } from 'redux';

import account from './account';
import messages from './messages';
import registration from './registration';

export default combineReducers({
  account,
  messages,
  isRegistered: registration
});
