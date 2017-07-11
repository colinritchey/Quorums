import * as QuestionActions from '../../../actions/question_actions';
import React from 'react';
import CommentForm from '../../../components/comment/comment_form';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { merge } from 'lodash';

const testQuestion = {
  id: 1,
  title: "Test Title",
  body: "Body",
  user: {
    id: 2,
    username: "Bill"
  },
  tag_ids: [2]
};

const testComment = {
  id: 1,
  body: "Body1",
  question_id: 1,
  user: testCurrentUser
}

const testCurrentUser = {
  id: 1,
  username: "Bob"
};

const testCurrentUser2 = {
  id: 2,
  username: "Bill"
};

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({
  questionDetail: { [testQuestion.id]: testQuestion },
  session: { currentUser: testCurrentUser },
  tags: [1,2,3]
});

const testStore2 = mockStore({
  questions: { 1: testQuestion },
  questionDetail: { [testQuestion.id]: testQuestion },
  session: { currentUser: testCurrentUser2 },
  tags: [1,2,3]
});

describe('question form container', () => {
  let commentFormWrapper,
      titleInput,
      closeModal,
      bodyInput;

  beforeEach(() => {
    QuestionActions.updateComment = jest.fn(question => dispatch => {});
    QuestionActions.createComment = jest.fn(question => dispatch => {});
    closeModal = jest.fn(() => dispatch => {});
  });

  describe('creating a new question', () => {
    beforeEach(() => {
      commentFormWrapper = mount(
        <CommentForm
          questionId={testComment.questionId}
          closeModal={closeModal}
          createComment={QuestionActions.createComment}
          updateComment={QuestionActions.updateComment}
           />
       ).find('CommentForm');

      bodyInput = commentFormWrapper.find('textarea');
    });

    it('correctly maps dispatch to props', () => {
      expect(commentFormWrapper.props().createComment).toBeDefined();
      expect(commentFormWrapper.props().updateComment).toBeDefined();
      expect(commentFormWrapper.props().closeModal).toBeDefined();
    });

    it('pre-fills title and body input fields with empty string', () => {
      expect(bodyInput.props().value).toEqual('');
    });

    it('updates the body field when they change', () => {
      bodyInput.simulate('change', { target: { value: 'World' }});
      expect(bodyInput.props().value).toEqual('World');
    });

    it('triggers the correct action when submitted', () => {
      const newComment = { body: 'testBody', hasError: false };
      bodyInput.simulate('change', { target: { value: newComment.body }});
      commentFormWrapper.find('form').simulate('submit');

      expect(QuestionActions.createComment).toBeCalledWith(newComment);
    });
  });

  describe('updating an existing question', () => {
    beforeEach(() => {
      commentFormWrapper = mount(
        <CommentForm
          comment={testComment}
          questionId={testComment.questionId}
          closeModal={closeModal}
          createComment={QuestionActions.createComment}
          updateComment={QuestionActions.updateComment}
           />
       ).find('CommentForm');

      bodyInput = commentFormWrapper.find('textarea');
    });

    it('correctly maps dispatch to props', () => {

      expect(commentFormWrapper.props().createComment).toBeDefined();
      expect(commentFormWrapper.props().updateComment).toBeDefined();
      expect(commentFormWrapper.props().closeModal).toBeDefined();
    });

    it('pre-fills title and body input fields with question data from the store', () => {
      expect(bodyInput.props().value).toEqual(testComment.body);
    });

    it('triggers the correct action when submitted', () => {
      const updatedComment = merge({}, testComment);
      updatedComment["hasError"] = false;
      updatedComment["question_id"] = testComment.questionId;

      commentFormWrapper.find('form').simulate('submit');
      expect(QuestionActions.updateComment).toBeCalledWith(updatedComment);
    });
  });
});
