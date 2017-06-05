import { hashHistory } from 'react-router';
import * as APIUtil from '../../util/question_api_util';
import * as AnswerAPIUtil from '../../util/answer_api_util';

import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION,
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
  fetchQuestions,
  fetchQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  createAnswer,
  updateAnswer,
  deleteAnswer
} from '../../actions/question_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('question actions', () => {
  describe('post constants', () => {
    it('should contain a RECEIVE_QUESTIONS constant', () => {
      expect(RECEIVE_QUESTIONS).toEqual('RECEIVE_QUESTIONS');
    });

    it('should contain a RECEIVE_QUESTION constant', () => {
      expect(RECEIVE_QUESTION).toEqual('RECEIVE_QUESTION');
    });

    it('should contain a REMOVE_QUESTION constant', () => {
      expect(REMOVE_QUESTION).toEqual('REMOVE_QUESTION');
    });

    it('should contain a RECEIVE_ANSWER constant', () => {
      expect(RECEIVE_ANSWER).toEqual('RECEIVE_ANSWER');
    });

    it('should contain a REMOVE_ANSWER constant', () => {
      expect(REMOVE_ANSWER).toEqual('REMOVE_ANSWER');
    });

    it('should contain a RECEIVE_QUESTION constant', () => {
      expect(RECEIVE_QUESTION).toEqual('RECEIVE_QUESTION');
    });

    it('should contain a REMOVE_QUESTION constant', () => {
      expect(REMOVE_QUESTION).toEqual('REMOVE_QUESTION');
    });


  });

  describe('thunks', () => {
    let store;

    beforeEach(() => {
      store = mockStore({ questions: {} });
    });

    describe('fetchQuestions', () => {
      it('should export a fetchQuestions function', () => {
        expect(typeof fetchQuestions).toEqual('function');
      });

      it('dispatches RECEIVE_QUESTIONS when posts have been fetched', () => {
        const questions = { 1: { id: 1, title: "Test", body: "Works?"} };
        APIUtil.fetchQuestions = jest.fn(() => (
          Promise.resolve(questions)
        ));
        const expectedActions = [{ type: "RECEIVE_QUESTIONS", questions }];

        return store.dispatch(fetchQuestions()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('fetchQuestion', () => {
      it('should export a fetchQuestion function', () => {
        expect(typeof fetchQuestion).toEqual('function');
      });

      it('dispatches RECEIVE_QUESTION when a single post has been fetched', () => {
        const question = { 1: { id: 1, title: "Test", body: "Works?"} };
        APIUtil.fetchQuestion = jest.fn(id => (
          Promise.resolve({ [id]: question[id] })
        ));
        const expectedActions = [{ type: "RECEIVE_QUESTION", question: question }];

        return store.dispatch(fetchQuestion(1)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('createQuestion', () => {
      it('should export a createQuestion function', () => {
        expect(typeof createQuestion).toEqual('function');
      });

      it('dispatches RECEIVE_QUESTION when a post has been created', () => {
        const newQuestion = { title: "New Title", body: "New Body" };
        APIUtil.createQuestion = jest.fn((question) => (
          Promise.resolve({ 1: question })
        ));
        const expectedActions = [{ type: "RECEIVE_QUESTION", question: { 1: newQuestion }}];

        return store.dispatch(createQuestion(newQuestion)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('updateQuestion', () => {
      it('should export an updateQuestion function', () => {
        expect(typeof updateQuestion).toEqual('function');
      });

      it('dispatches RECEIVE_QUESTION when a question has been updated', () => {
        const updatedQuestion = { title: "Updated Title", body: "Updated Body", id: 2 };
        APIUtil.updateQuestion = jest.fn((question) => (
          Promise.resolve({ [updatedQuestion.id]: updatedQuestion })
        ));
        const expectedActions = [{
          type: "RECEIVE_QUESTION",
          question: { [updatedQuestion.id]: updatedQuestion }
        }];

        return store.dispatch(updateQuestion(updatedQuestion)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('deleteQuestion', () => {
      it('should export a deletePost function', () => {
        expect(typeof deleteQuestion).toEqual('function');
      });

      it('dispatches REMOVE_QUESTION when a post has been deleted', () => {
        const deletedQuestion = { title: "Title", body: "Body", id: 3 };

        APIUtil.deleteQuestion = jest.fn((id) => (
          Promise.resolve({ [id]: deletedQuestion })
        ));
        const expectedActions = [{
          type: "REMOVE_QUESTION",
          question: { [deletedQuestion.id]: deletedQuestion }
        }];

        hashHistory.push = jest.fn();

        return store.dispatch(deleteQuestion(deletedQuestion)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          expect(hashHistory.push).toBeCalledWith('/');
        });
      });
    });

    describe('createAnswer', () => {
      it('should export a createAnswer function', () => {
        expect(typeof createAnswer).toEqual('function');
      });

      it('dispatches RECEIVE_ANSWER when a post has been created', () => {
        const newAnswer = { body: "New Body" };
        AnswerAPIUtil.createAnswer = jest.fn((answer) => (
          Promise.resolve({ 1: answer })
        ));
        const expectedActions = [{ type: "RECEIVE_ANSWER", answer: { 1: newAnswer }}];

        return store.dispatch(createAnswer(newAnswer)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('updateAnswer', () => {
      it('should export an updateAnswer function', () => {
        expect(typeof updateAnswer).toEqual('function');
      });

      it('dispatches RECEIVE_ANSWER when a answer has been updated', () => {
        const updatedAnswer = { body: "Updated Body", id: 2 };
        AnswerAPIUtil.updateAnswer = jest.fn((answer) => (
          Promise.resolve({ [updatedAnswer.id]: updatedAnswer })
        ));
        const expectedActions = [{
          type: "RECEIVE_ANSWER",
          answer: { [updatedAnswer.id]: updatedAnswer }
        }];

        return store.dispatch(updateAnswer(updatedAnswer)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('deleteAnswer', () => {
      it('should export a deleteAnswer function', () => {
        expect(typeof deleteAnswer).toEqual('function');
      });

      it('dispatches REMOVE_ANSWER when a post has been deleted', () => {
        const deletedAnswer = { body: "Body", id: 3 };

        AnswerAPIUtil.deleteAnswer = jest.fn((id) => (
          Promise.resolve({ [id]: deletedAnswer })
        ));
        const expectedActions = [{
          type: "REMOVE_ANSWER",
          answer: { [deletedAnswer.id]: deletedAnswer }
        }];

        return store.dispatch(deleteAnswer(deletedAnswer)).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });
  });
});
