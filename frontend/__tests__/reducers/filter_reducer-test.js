import FiltersReducer from '../../reducers/filters_reducer';
import RootReducer from '../../reducers/root_reducer';
import { createStore } from 'redux';

describe('FiltersReducer', () => {
  let defaultState = {
    searchByTitle: undefined,
    searchByTagId: undefined
  };

  it('exports an function', () => {
    expect(typeof FiltersReducer).toEqual('function');
  });

  it('should initialize with an default object as the default state', () => {
    expect(FiltersReducer(undefined, {})).toEqual(defaultState);
  });

  it('should return the previous state if an action is not matched', () => {
    const oldState = { 1: 'oldState' };
    const newState = FiltersReducer(oldState, { type: 'unmatchedtype' });
    expect(newState).toEqual(oldState);
  });

  describe('handling the UPDATE_FILTER action', () => {
    let action,
        testFilter;

    beforeEach(() => {
      testFilter = { searchByTitle: 'Internet' };
      action = {
        type: 'UPDATE_FILTER',
        filter: 'searchByTitle',
        value: 'Internet'
      };
    });

    it('should add the post to the state using the post id as a key', () => {
      let state = FiltersReducer(undefined, action);
      expect(state['searchByTitle']).toEqual('Internet');
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let state = FiltersReducer(oldState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });
});
