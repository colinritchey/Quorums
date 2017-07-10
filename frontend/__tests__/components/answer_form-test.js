import * as QuestionActions from '../../actions/question_actions';
import React from 'react';
import AnswerForm from '../../components/answer/answer_form';
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

const testAnswer = {
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
  let answerFormWrapper,
      titleInput,
      closeModal,
      bodyInput;

  beforeEach(() => {
    QuestionActions.updateAnswer = jest.fn(question => dispatch => {});
    QuestionActions.createAnswer = jest.fn(question => dispatch => {});
    closeModal = jest.fn(() => dispatch => {});
  });



  describe('creating a new question', () => {
    beforeEach(() => {
      answerFormWrapper = mount(
        <AnswerForm
          questionId={testAnswer.questionId}
          closeModal={closeModal}
          createAnswer={QuestionActions.createAnswer}
          updateAnswer={QuestionActions.updateAnswer}
           />
      ).find('AnswerForm');

      bodyInput = answerFormWrapper.find('textarea');
    });

    it('correctly maps dispatch to props', () => {
      expect(answerFormWrapper.props().createAnswer).toBeDefined();
      expect(answerFormWrapper.props().updateAnswer).toBeDefined();
      expect(answerFormWrapper.props().closeModal).toBeDefined();
    });

    it('pre-fills title and body input fields with empty string', () => {
      expect(bodyInput.props().value).toEqual('');
    });

    it('updates the body field when they change', () => {
      bodyInput.simulate('change', { target: { value: 'World' }});
      expect(bodyInput.props().value).toEqual('World');
    });

    it('triggers the correct action when submitted', () => {
      const newAnswer = { body: 'testBody', hasError: false };
      bodyInput.simulate('change', { target: { value: newAnswer.body }});
      answerFormWrapper.find('form').simulate('submit');

      expect(QuestionActions.createAnswer).toBeCalledWith(newAnswer);
    });
  });

  describe('updating an existing question', () => {
    beforeEach(() => {
      answerFormWrapper = mount(
        <AnswerForm
          answer={testAnswer}
          questionId={testAnswer.questionId}
          closeModal={closeModal}
          createAnswer={QuestionActions.createAnswer}
          updateAnswer={QuestionActions.updateAnswer}
           />
      ).find('AnswerForm');

      bodyInput = answerFormWrapper.find('textarea');
    });

    it('correctly maps dispatch to props', () => {

      expect(answerFormWrapper.props().createAnswer).toBeDefined();
      expect(answerFormWrapper.props().updateAnswer).toBeDefined();
      expect(answerFormWrapper.props().closeModal).toBeDefined();
    });

    it('pre-fills title and body input fields with question data from the store', () => {
      expect(bodyInput.props().value).toEqual(testAnswer.body);
    });

    it('triggers the correct action when submitted', () => {
      const updatedAnswer = merge({}, testAnswer);
      updatedAnswer["hasError"] = false;
      updatedAnswer["question_id"] = testAnswer.questionId;

      answerFormWrapper.find('form').simulate('submit');
      expect(QuestionActions.updateAnswer).toBeCalledWith(updatedAnswer);
    });
  });
});
