import { combineReducers } from 'redux';

import contacts from './contacts';
import eth from './eth';
import isRegistered, { resetRegistration } from './isRegistered';
import loading from './loading';
import messages from './messages';
import username, { unsetUsername } from './username';

// deletes user account
export const removeAccount = () => dispatch => {
  dispatch(resetRegistration());
  dispatch(unsetUsername());
};

export default combineReducers({
  contacts,
  eth,
  isRegistered,
  loading,
  messages,
  username
});
