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

describe('session actions', () => {
  describe('session constants', () => {
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

    describe('login', () => {
      it('should export a login function', () => {
        expect(typeof login).toEqual('function');
      });

      it('dispatches RECEIVE_CURRENT_USER when user session have been created', () => {
        const newUser = { username: "Bill", password: "password" };
        APIUtil.login = jest.fn(() => (
          Promise.resolve({ username: "Bill", password: "password" })
        ));
        const expectedActions = [{ type: "RECEIVE_CURRENT_USER", currentUser: newUser }];

        return store.dispatch(login(newUser)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('signup', () => {
      it('should export a signup function', () => {
        expect(typeof signup).toEqual('function');
      });

      it('dispatches RECEIVE_CURRENT_USER when user session have been created', () => {
        const newUser = { username: "Bill", password: "password" };
        APIUtil.signup = jest.fn(() => (
          Promise.resolve({ username: "Bill", password: "password" })
        ));
        const expectedActions = [{ type: "RECEIVE_CURRENT_USER", currentUser: newUser }];

        return store.dispatch(signup(newUser)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('logout', () => {
      it('should export a signup function', () => {
        expect(typeof logout).toEqual('function');
      });

      it('dispatches LOGOUT when user session have been created', () => {
        const newUser = { username: "Bill", password: "password" };
        APIUtil.login = jest.fn(() => (
          Promise.resolve({ username: "Bill", password: "password" })
        ));
        APIUtil.logout = jest.fn(() => (
          Promise.resolve()
        ));
        const expectedActions = [{ type: "LOGOUT" }];

        return store.dispatch(logout()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('updateUser', () => {
      it('should export an updateUser function', () => {
        expect(typeof updateUser).toEqual('function');
      });

      it('dispatches RECEIVE_CURRENT_USER when a question has been updated', () => {
        const updatedUser = { id: 1, username: "Bill", tag_ids: [1,2,3] };
        APIUtil.updateUser = jest.fn((updatedUser) => (
          Promise.resolve({ id: 1, username: "Bill", tag_ids: [1,2,3] })
        ));
        const expectedActions = [{
          type: "RECEIVE_CURRENT_USER",
          currentUser: updatedUser
        }];

        return store.dispatch(updateUser(updatedUser)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });


  });
});
