import React from 'react';
import QuestionDetailContainer from '../../components/question_detail/question_detail_container';
import { mount } from 'enzyme';
import * as QuestionActions from '../../actions/question_actions';
import * as TagActions from '../../actions/tag_actions';
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
  username: "Bob"
}

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({
  questionDetail: { [testQuestion.id]: testQuestion },
  session: { currentUser: testCurrentUser },
  tags: [1,2,3]
});

describe('question deatil', () => {
  let questionDetailWrapper;

  beforeEach(() => {
    QuestionActions.fetchQuestion = jest.fn(() => dispatch => {});
    const testParams = { questionId: testQuestion.id };

    questionDetailWrapper = mount(
      <QuestionDetailContainer store={testStore}  params={testParams}/>
    ).find('QuestionDetail');
  });

  it('correctly maps state to props', () => {
    expect(questionDetailWrapper.props().post).toEqual(testQuestion);
  });

});
