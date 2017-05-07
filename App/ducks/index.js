import { combineReducers } from 'redux';

import account from './account';
import contacts from './contacts';
import messages from './messages';
import registration from './registration';

export default combineReducers({
  account,
  contacts,
  messages,
  isRegistered: registration
});
