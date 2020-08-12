import { LOGIN, LOGOUT, REMEMBER, REMOVE_LOGIN } from './constants';

export const addUser = (logindata) => {
  return (dispatch) => {
    return dispatch({ type: LOGIN, data: logindata });
  }
};

export const deleteUser = () => {
  return (dispatch) => {
    return dispatch({ type: LOGOUT });
  }
};