import { combineReducers } from 'redux';

import account from './account';
import contacts from './contacts';
import eth from './eth';
import loading from './loading';
import messages from './messages';
import registration from './registration';

export default combineReducers({
  account,
  contacts,
  eth,
  isRegistered: registration,
  loading,
  messages
});
