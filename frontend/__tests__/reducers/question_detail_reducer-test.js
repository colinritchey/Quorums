import QuestionDetailReducer from '../../reducers/question_detail_reducer';
import { createStore } from 'redux';

describe('QuestionDetailReducer', () => {
  let defaultState = {
    answer: undefined,
    comment: undefined,
    tag_: []
  };

  it('exports an function', () => {
    expect(typeof QuestionDetailReducer).toEqual('function');
  });

  it('should initialize with an default object as the default state', () => {
    expect(QuestionDetailReducer(undefined, {})).toEqual(defaultState);
  });

  it('should return the previous state if an action is not matched', () => {
    const oldState = { 1: 'oldState' };
    const newState = QuestionDetailReducer(oldState, { type: 'unmatchedtype' });
    expect(newState).toEqual(oldState);
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
      let state = QuestionDetailReducer(undefined, action);
      expect(state[1]).toEqual(testQuestion);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let state = QuestionDetailReducer(oldState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the REMOVE_QUESTION action', () => {
    let action,
        testQuestion,
        testAnswer;

    beforeEach(() => {
      testQuestion = { id: 1, title: 'testQuestion', body: 'testBody', tag_ids: [1] };
      action = {
        type: 'REMOVE_QUESTION',
        question: testQuestion
      };
    });

    it('should add the post to the state using the post id as a key', () => {
      let state = QuestionDetailReducer(undefined, action);
      expect(state).toEqual(defaultState);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let state = QuestionDetailReducer(oldState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the RECEIVE_ANSWER action', () => {
    let action,
        preAction,
        testQuestion,
        testAnswer;

    beforeEach(() => {
      testQuestion = { id: 1, title: 'testQuestion', body: 'testBody', tag_ids: [1] };
      testAnswer = { id: 1, body: 'some answer', question_id: 1};

      action = {
        type: 'RECEIVE_ANSWER',
        answer: testAnswer
      };

      preAction = {
        type: 'RECEIVE_QUESTION',
        question: testQuestion
      }
    });

    it('should add the post to the state using the post id as a key', () => {
      let preState = QuestionDetailReducer(undefined, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(state[1].answers[1]).toEqual(testAnswer);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let preState = QuestionDetailReducer(oldState, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the REMOVE_ANSWER action', () => {
    let action,
        preAction,
        testQuestion,
        testAnswer;

    beforeEach(() => {
      testAnswer = { id: 1, body: 'some answer', question_id: 1};

      testQuestion = { id: 1,
        title: 'testQuestion',
        body: 'testBody',
        tag_ids: [1],
        answers: { 1: testAnswer }
      };

      action = {
        type: 'REMOVE_ANSWER',
        answer: testAnswer
      };

      preAction = {
        type: 'RECEIVE_QUESTION',
        question: testQuestion
      }
    });

    it('should add the post to the state using the post id as a key', () => {
      let preState = QuestionDetailReducer(undefined, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(state[1].answers[1]).toEqual(undefined);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let preState = QuestionDetailReducer(oldState, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });


  describe('handling the RECEIVE_COMMENT action', () => {
    let action,
        preAction,
        testQuestion,
        testComment;

    beforeEach(() => {
      testQuestion = { id: 1, title: 'testQuestion', body: 'testBody', tag_ids: [1] };
      testComment = { id: 1, body: 'some comment', question_id: 1};

      action = {
        type: 'RECEIVE_COMMENT',
        comment: testComment
      };

      preAction = {
        type: 'RECEIVE_QUESTION',
        question: testQuestion
      }
    });

    it('should add the post to the state using the post id as a key', () => {
      let preState = QuestionDetailReducer(undefined, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(state[1].comments[1]).toEqual(testComment);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let preState = QuestionDetailReducer(oldState, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

  describe('handling the REMOVE_COMMENT action', () => {
    let action,
        preAction,
        testQuestion,
        testComment;

    beforeEach(() => {
      testComment = { id: 1, body: 'some comment', question_id: 1};

      testQuestion = { id: 1,
        title: 'testQuestion',
        body: 'testBody',
        tag_ids: [1],
        comments: { 1: testComment }
      };

      action = {
        type: 'REMOVE_COMMENT',
        comment: testComment
      };

      preAction = {
        type: 'RECEIVE_QUESTION',
        question: testQuestion
      }
    });

    it('should add the post to the state using the post id as a key', () => {
      let preState = QuestionDetailReducer(undefined, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(state[1].comments[1]).toEqual(undefined);
    });

    it('should not affect the other posts in the state', () => {
      let oldState = { 2: 'oldState' };
      let preState = QuestionDetailReducer(oldState, preAction);
      let state = QuestionDetailReducer(preState, action);
      expect(oldState).toEqual({ 2: 'oldState' });
    });
  });

});
