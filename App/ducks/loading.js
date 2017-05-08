// creates becomes false on rehydrate
import { REHYDRATE } from 'redux-persist/constants';

export default function(state = true, action = {}) {
  switch (action.type) {
    case REHYDRATE:
      return false;
    default:
      return state;
  }
}
