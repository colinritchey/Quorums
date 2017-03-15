export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";
export const LOGOUT = "LOGOUT";

import { hashHistory } from 'react-router';

import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
  errors: []
});

export const receiveLogout = () => ({
  type: LOGOUT
});

export const login = user => dispatch => {
  APIUtil.login(user).then(_user => dispatch(receiveCurrentUser(_user)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const signup = user => dispatch => {
  APIUtil.signup(user).then(_user => dispatch(receiveCurrentUser(_user)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const logout = () => dispatch => {
  APIUtil.logout().then(user => {
    dispatch(receiveLogout(user));
    hashHistory.push('/login');
  },
  errors => dispatch(receiveErrors(errors)));
};
