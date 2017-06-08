import { hashHistory } from 'react-router';
import $ from 'jquery';
import * as APIUtil from '../../util/question_api_util';

import {
  UPDATE_FILTER,
  changeFilter,
  updateFilter
} from '../../actions/filter_actions';

import {
  fetchQuestions
} from '../../actions/question_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('fitler actions', () => {
  describe('fitler constants', () => {
    it('should contain a UPDATE_FILTER constant', () => {
      expect(UPDATE_FILTER).toEqual('UPDATE_FILTER');
    });
  });

  describe('thunks', () => {
    let store;

    beforeEach(() => {
      store = mockStore({ questions: {} });
    });

    describe('updateFilter', () => {
      it('should export a updateFilter function', () => {
        expect(typeof updateFilter).toEqual('function');
      });

      it('dispatches UPDATE_FILTER when questions have been fetched', () => {
        let newFilter = "searchByTitle";
        let newValue = "Test";

        const expectedActions = [{ type: "UPDATE_FILTER", filter: newFilter, value: newValue }];

        // TODO: change to updateFilter
        store.dispatch(changeFilter(newFilter, newValue));
        return expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
