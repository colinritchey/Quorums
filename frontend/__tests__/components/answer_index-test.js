import React from 'react';
import { mount } from 'enzyme';

import AnswerIndex from '../../components/answer/answer_index.jsx';
import AnswerIndexItem from '../../components/answer/answer_index_item.jsx';
import * as QuestionActions from '../../actions/question_actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
  username: "Bob",
  img_url: "filler"
}

const testAnswers = [
  { id: 1, body: "Body1", question_id: 1, user: testCurrentUser },
  { id: 2, body: "Body2", question_id: 1, user: testCurrentUser },
  { id: 3, body: "Body3", question_id: 1, user: testCurrentUser }
];

describe('answer index', () => {
  let answerIndexWrapper;

  beforeEach(() => {
    QuestionActions.createAnswer = jest.fn(() => dispatch => {});
    QuestionActions.updateAnswer = jest.fn(() => dispatch => {});
    QuestionActions.deleteAnswer = jest.fn(() => dispatch => {});

    answerIndexWrapper = mount(
      <AnswerIndex
      answers={testAnswers}
      question={testQuestion}
      currentUser={testCurrentUser}
      createAnswer={QuestionActions.createAnswer}
      updateAnswer={QuestionActions.updateAnswer}
      deleteAnswer={QuestionActions.deleteAnswer}
       />
    );

  });

  it('renders a AnswerIndexItem for each post, passing in each answer as a "answer" prop', () => {
    const answerIndexItems = answerIndexWrapper.find('ul').children();

    expect(answerIndexItems.length).toBe(3);

    answerIndexItems.forEach((item, i) => {
      expect(item.props().answer).toEqual(testAnswers[i]);
    });
  });

  // it('contains a AnswerFormContainer component', () => {
  //
  //   const answerForm = answerIndexWrapper.find('FormModal');
  //
  //   expect(answerForm.length).toBe(1);
  // });
});
