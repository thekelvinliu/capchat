// actions
const COMPLETE = 'registration/COMPLETE';

// action creators
export const completeRegistration = () => ({
  type: COMPLETE
});

// reducer
export default function(state = {}, action = {}) {
  switch (action.type) {
    case COMPLETE:
      return true;
    default:
      return state;
  }
}
