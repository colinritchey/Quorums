import QuestionReducer from '../../reducers/question_reducer';
import RootReducer from '../../reducers/root_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {

  describe('QuestionReducer', () => {
    it('exports an function', () => {
      expect(typeof QuestionReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(QuestionReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = QuestionReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_QUESTIONS action', () => {
      let action,
          testQuestions;

      beforeEach(() => {
        let testQuestion1 = { id: 1, title: 'testQuestion', body: 'testBody', tag_ids: [1] };
        let testQuestion2 = { id: 2, title: 'testQuestion', body: 'testBody', tag_ids: [1] };

        testQuestions = { 1: testQuestion1, 2: testQuestion2 };
        action = {
          type: 'RECEIVE_QUESTIONS',
          questions: testQuestions
        };
      });

      it('should replace the state with the action\'s posts', () => {
        const state = QuestionReducer(undefined, action);
        expect(state).toEqual(testQuestions);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        QuestionReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the RECEIVE_QUESTION action', () => {
      let action,
          testQuestion;

      beforeEach(() => {
        testQuestion = { id: 1, title: 'testQuestion', body: 'testBody', tag_ids: [1] };
        action = {
          type: 'RECEIVE_QUESTION',
          question: testQuestion
        };
      });

      it('should add the post to the state using the post id as a key', () => {
        let state = QuestionReducer(undefined, action);
        expect(state[1]).toEqual(testQuestion);
      });

      it('should not affect the other posts in the state', () => {
        let oldState = { 2: 'oldState' };
        let state = QuestionReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });

    describe('handling the CLEAR_QUESTIONS action', () => {
      let action,
          testQuestions;

      beforeEach(() => {
        let testQuestion1 = { id: 1, title: 'testQuestion', body: 'testBody', tag_ids: [1] };
        let testQuestion2 = { id: 2, title: 'testQuestion', body: 'testBody', tag_ids: [1] };

        testQuestions = { 1: testQuestion1, 2: testQuestion2 };
        action = {
          type: 'CLEAR_QUESTIONS',
          questions: testQuestions
        };
      });

      it('should remove the correct post from the state', () => {
        let state = QuestionReducer({ testQuestions }, action);
        expect(typeof state[1]).toEqual('undefined');
      });

      it('should not affect the other posts in the state', () => {
        let oldState = { 1: testQuestions, 2: 'oldState' };
        let state = QuestionReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });
  });

});
