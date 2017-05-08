import { REHYDRATE } from 'redux-persist/constants';

// default to true
const defaultState = true;

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      return false;
    default:
      return state;
  }
}
