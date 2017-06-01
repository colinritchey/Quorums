import { hashHistory } from 'react-router';
import * as APIUtil from '../../util/session_api_util';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  REMOVE_ERRORS,
  LOGOUT,
  login,
  signup,
  logout,
  updateUser
} from '../../actions/session_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('post actions', () => {
  describe('post constants', () => {
    it('should contain a RECEIVE_CURRENT_USER constant', () => {
      expect(RECEIVE_CURRENT_USER).toEqual('RECEIVE_CURRENT_USER');
    });

    it('should contain a RECEIVE_ERRORS constant', () => {
      expect(RECEIVE_ERRORS).toEqual('RECEIVE_ERRORS');
    });

    it('should contain a REMOVE_ERRORS constant', () => {
      expect(REMOVE_ERRORS).toEqual('REMOVE_ERRORS');
    });
  });

  describe('thunks', () => {
    let store;

    beforeEach(() => {
      store = mockStore({ session: {} });
    });

    // describe('login', () => {
    //   it('should export a login function', () => {
    //     expect(typeof login).toEqual('function');
    //   });
    //
    //   it('dispatches RECEIVE_CURRENT_USER when user session have been created', () => {
    //     const user = { currentUser: "Bill", user_id: 1 };
    //     APIUtil.login = jest.fn(() => (
    //       Promise.resolve({ 1: user })
    //     ));
    //     const expectedActions = [{ type: "RECEIVE_CURRENT_USER", user }];
    //
    //     return store.dispatch(login(user)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //     });
    //   });
    // });

    
  });
});
