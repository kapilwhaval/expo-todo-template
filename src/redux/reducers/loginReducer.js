import { LOGIN, LOGOUT } from '../actions/constants';

const initialState = {
  userDetails: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, userDetails: action.data };
    case LOGOUT:
      return { ...state, userDetails: '' };
    default:
      return state;
  }
}