import {
  RECEIVE_MAIN_ERRORS,
  REMOVE_MAIN_ERRORS } from '../actions/error_actions';

const _defaultState = Object.freeze({
  errors: []
});

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_MAIN_ERRORS:
      return action.errors;
    case REMOVE_MAIN_ERRORS:
      return state;
    default:
      return state;
  }
};

export default ErrorsReducer;
