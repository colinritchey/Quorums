import SessionReducer from '../../reducers/session_reducer';
import { createStore } from 'redux';

describe('SessionReducer', () => {
  let defaultState = {
    currentUser: null,
    errors: []
  };

  it('exports an function', () => {
    expect(typeof SessionReducer).toEqual('function');
  });

  it('should initialize with an default object as the default state', () => {
    expect(SessionReducer(undefined, {})).toEqual(defaultState);
  });

  it('should return the previous state if an action is not matched', () => {
    const oldState = { 1: 'oldState' };
    const newState = SessionReducer(oldState, { type: 'unmatchedtype' });
    expect(newState).toEqual(oldState);
  });

  describe('handling the RECEIVE_CURRENT_USER action', () => {
    let action,
        testUser;

    beforeEach(() => {
      testUser = {
        username: 'hunter_12',
        password: 'password'
      };
      action = {
        type: 'RECEIVE_CURRENT_USER',
        currentUser: testUser
      };
    });

    it('should add the post to the state using the post id as a key', () => {
      let state = SessionReducer(undefined, action);
      expect(state['currentUser']).toEqual(testUser);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let state = SessionReducer(oldState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the RECEIVE_ERRORS action', () => {
    let action,
        testErrors;

    beforeEach(() => {
      testErrors = ['Invalid Login'];
      action = {
        type: 'RECEIVE_ERRORS',
        errors: testErrors
      };
    });

    it('should add the post to the state using the post id as a key', () => {
      let state = SessionReducer(undefined, action);
      expect(state['errors']).toEqual(testErrors);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let state = SessionReducer(oldState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the RECEIVE_ERRORS action', () => {
    let preAction,
        action,
        testErrors;

    beforeEach(() => {
      testErrors = ['Invalid Login'];

      preAction = {
        type: 'RECEIVE_ERRORS',
        errors: testErrors
      };

      action = {
        type: 'REMOVE_ERRORS',
        errors: []
      }
    });

    it('should add the post to the state using the post id as a key', () => {
      let preState = SessionReducer(undefined, preAction);
      let state = SessionReducer(preState, action);
      expect(state['errors']).toEqual([]);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let preState = SessionReducer(undefined, preAction);
      let state = SessionReducer(preState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the RECEIVE_ERRORS action', () => {
    let preAction,
        action,
        testUser;

    beforeEach(() => {
      testUser = {
        username: 'hunter_12',
        password: 'password'
      };

      preAction = {
        type: 'RECEIVE_CURRENT_USER',
        currentUser: testUser
      };

      action = {
        type: 'LOGOUT'
      }
    });

    it('should add the post to the state using the post id as a key', () => {
      let preState = SessionReducer(undefined, preAction);
      let state = SessionReducer(preState, action);
      expect(state['currentUser']).toEqual(null);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let preState = SessionReducer(undefined, preAction);
      let state = SessionReducer(preState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });
});
