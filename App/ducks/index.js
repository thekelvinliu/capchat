import { combineReducers } from 'redux';

import account from './account';
import registration from './registration';

export default combineReducers({
  account,
  isRegistered: registration
});
