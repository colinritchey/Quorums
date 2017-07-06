import * as QuestionActions from '../../actions/question_actions';
import React from 'react';
import QuestionFormContainer from '../../components/question_form/question_form_container';
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
  let questionFormWrapper,
      titleInput,
      closeModal,
      bodyInput;

  beforeEach(() => {
    QuestionActions.updateQuestion = jest.fn(question => dispatch => {});
    QuestionActions.fetchQuestion = jest.fn(id => dispatch => {});
    QuestionActions.createQuestion = jest.fn(question => dispatch => {});
    closeModal = jest.fn(() => dispatch => {});
  });

  describe('creating a new question', () => {
    beforeEach(() => {
      questionFormWrapper = mount(
        <QuestionFormContainer formType="new" store={testStore} />
      ).find('QuestionForm');

      titleInput = questionFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));
      bodyInput = questionFormWrapper.find('textarea');
    });

    it('correctly maps state to props', () => {
      expect(questionFormWrapper.props().question).toEqual({
        title: "", body: ""
      });
    });

    it('correctly maps dispatch to props', () => {
      expect(questionFormWrapper.props().action).toBeDefined();
    });

    it('pre-fills title and body input fields with empty string', () => {
      expect(titleInput.props().value).toEqual('');
      expect(bodyInput.props().value).toEqual('');
    });

    it('updates the title field when they change', () => {
      titleInput.simulate('change', { target: { value: 'Hello' }});
      expect(titleInput.props().value).toEqual('Hello');
    });

    it('updates the body field when they change', () => {
      bodyInput.simulate('change', { target: { value: 'World' }});
      expect(bodyInput.props().value).toEqual('World');
    });

    it('triggers the correct action when submitted', () => {
      const newQuestion = { title: 'testTitle', body: 'testBody', hasError: false };
      titleInput.simulate('change', { target: { value: newQuestion.title }});
      bodyInput.simulate('change', { target: { value: newQuestion.body }});
      questionFormWrapper.find('form').simulate('submit');

      expect(QuestionActions.createQuestion).toBeCalledWith(newQuestion);
    });
  });

  describe('updating an existing question', () => {
    beforeEach(() => {
      const testParams = { formType: 'edit',  questionId: 1 };
      questionFormWrapper = mount(
        <QuestionFormContainer store={testStore2}
        question={testQuestion}
        closeModal={closeModal}
        params={testParams} />
      ).find('QuestionForm');

      titleInput = questionFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));
      bodyInput = questionFormWrapper.find('textarea');
    });

    it('correctly maps dispatch to props', () => {
      const props = questionFormWrapper.props();

      expect(props.fetchQuestion).toBeDefined();
      expect(props.action).toBeDefined();
    });

    it('pre-fills title and body input fields with question data from the store', () => {

      expect(QuestionActions.fetchQuestion).toBeCalledWith(testQuestion.id);
      expect(titleInput.props().value).toEqual(testQuestion.title);
      expect(bodyInput.props().value).toEqual(testQuestion.body);
    });

    it('triggers the correct action when submitted', () => {

      const updatedQuestion = merge({}, testQuestion);
      updatedQuestion["hasError"] = false;

      questionFormWrapper.find('form').simulate('submit');
      expect(QuestionActions.updateQuestion).toBeCalledWith(updatedQuestion);
    });
  });
});
