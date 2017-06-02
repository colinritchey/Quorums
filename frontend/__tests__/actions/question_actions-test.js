import { hashHistory } from 'react-router';
import * as APIUtil from '../../util/question_api_util';

import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  fetchQuestions,
  fetchQuestion,
} from '../../actions/question_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('post actions', () => {
  describe('post constants', () => {
    it('should contain a RECEIVE_QUESTIONS constant', () => {
      expect(RECEIVE_QUESTIONS).toEqual('RECEIVE_QUESTIONS');
    });

    it('should contain a RECEIVE_QUESTION constant', () => {
      expect(RECEIVE_QUESTION).toEqual('RECEIVE_QUESTION');
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
    //
    // describe('createPost', () => {
    //   it('should export a createPost function', () => {
    //     expect(typeof createPost).toEqual('function');
    //   });
    //
    //   it('dispatches RECEIVE_POST when a post has been created', () => {
    //     const newPost = { title: "New Title", body: "New Body" };
    //     PostApiUtil.createPost = jest.fn((post) => (
    //       Promise.resolve({ 1: post })
    //     ));
    //     const expectedActions = [{ type: "RECEIVE_POST", post: { 1: newPost }}];
    //
    //     return store.dispatch(createPost(newPost)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //     });
    //   });
    // });
    //
    // describe('updatePost', () => {
    //   it('should export an updatePost function', () => {
    //     expect(typeof updatePost).toEqual('function');
    //   });
    //
    //   it('dispatches RECEIVE_POST when a post has been updated', () => {
    //     const updatedPost = { title: "Updated Title", body: "Updated Body", id: 2 };
    //     PostApiUtil.updatePost = jest.fn((post) => (
    //       Promise.resolve({ [updatedPost.id]: updatedPost })
    //     ));
    //     hashHistory.push = jest.fn();
    //     const expectedActions = [{
    //       type: "RECEIVE_POST",
    //       post: { [updatedPost.id]: updatedPost }
    //     }];
    //
    //     return store.dispatch(updatePost(updatedPost)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //       expect(hashHistory.push).toBeCalledWith('/');
    //     });
    //   });
    // });
    //
    // describe('deletePost', () => {
    //   it('should export a deletePost function', () => {
    //     expect(typeof updatePost).toEqual('function');
    //   });
    //
    //   it('dispatches REMOVE_POST when a post has been deleted', () => {
    //     const post = { title: "Title", body: "Body", id: 3 };
    //     PostApiUtil.deletePost = jest.fn((post) => (
    //       Promise.resolve({ [post.id]: post })
    //     ));
    //     const expectedActions = [{
    //       type: "REMOVE_POST",
    //       post: { [post.id]: post }
    //     }];
    //
    //     return store.dispatch(deletePost(post)).then(() => {
    //       expect(store.getActions()).toEqual(expectedActions);
    //     });
    //   });
    // });
  });
});
