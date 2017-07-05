import * as QuestionActions from '../../actions/question_actions';
import React from 'react';
import QuestionFormContainer from '../../components/question_form/question_form_container';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';

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

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({
  questionDetail: { [testQuestion.id]: testQuestion },
  session: { currentUser: testCurrentUser },
  tags: [1,2,3]
});

describe('question form container', () => {
  let questionFormWrapper,
      titleInput,
      bodyInput;

  beforeEach(() => {
    QuestionActions.updateQuestion = jest.fn(question => dispatch => {});
    QuestionActions.fetchQuestion = jest.fn(id => dispatch => {});
    QuestionActions.createQuestion = jest.fn(question => dispatch => {});
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
  });
});
