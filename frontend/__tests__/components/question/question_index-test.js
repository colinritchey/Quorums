// jest.mock('../../components/question/question_index_item', () => (
//   () => ({ render: () => ( <div></div> ) })
// ));
//
// jest.mock('../../components/question_form/question_form_container', () => {
//   return function QuestionFormContainer() {
//     return { render: () => ( <div></div> ) }
//   }
// });

import React from 'react';
import { mount } from 'enzyme';

import QuestionIndexContainer from '../../../components/question/question_index_container';
import QuestionIndex from '../../../components/question/question_index.jsx';
import QuestionIndexItem from '../../../components/question/question_index_item.jsx';
import * as QuestionActions from '../../../actions/question_actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testQuestions = {
  1: { id: 1, title: "Title1" },
  2: { id: 2, title: "Title2" },
  3: { id: 3, title: "Title3" }
};
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ questions: testQuestions });

describe('question index', () => {
  let questionIndexWrapper;
  let questionFromWrapper;

  beforeEach(() => {
    QuestionActions.fetchQuestions = jest.fn(() => dispatch => {});
    questionIndexWrapper = mount(
      <QuestionIndexContainer store={testStore} formType={"new"}/>
    ).find('QuestionIndex');

    questionFromWrapper = mount(
      <QuestionIndexContainer store={testStore} formType={"new"}/>
    ).find('QuestionFormContainer');
  });

  it('correctly maps state to props', () => {
    let mappedQuestions = Object.keys(testQuestions).map((id) => testQuestions[id]);

    expect(questionIndexWrapper.props().questions).toEqual(mappedQuestions);
  });

  it('correctly maps dispatch to props', () => {
    expect(questionIndexWrapper.props().fetchQuestions).toBeDefined();
    expect(questionIndexWrapper.props().clearQuestions).toBeDefined();
  });

  it('fetches posts after being mounted', () => {
    expect(QuestionActions.fetchQuestions).toBeCalled();
  });

  it('renders a QuestionIndexItem for each post, passing in each question as a "question" prop', () => {
    const questionIndexItems = questionIndexWrapper.find('QuestionIndexItem').children();
    // console.log(questionIndexItems);

    // expect(questionIndexItems.length).toBe(3);

    questionIndexItems.forEach((item, i) => {
      // console.log(item);
      expect(item.props().question).toEqual(testQuestions[i+1]);
    });
  });

  // it('contains a QuestionFormContainer component', () => {
  //
  //   const questionForm = questionFromWrapper.find('QuestionForm');
  //   console.log("questionForm", questionForm);
  //
  //   expect(questionForm.length).toBe(1);
  // });
});
