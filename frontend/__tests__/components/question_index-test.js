// jest.mock('../../components/question/question_index_item', () => (
//   () => ({ render: () => ( <div></div> ) })
// ));
// jest.mock('../components/posts/post_form_container', () => {
//   // need to name function so we can query for it later
//   return function FormContainer() {
//     return { render: () => ( <div></div> ) }
//   }
// });

import React from 'react';
import { mount } from 'enzyme';

import QuestionIndexContainer from '../../components/question/question_index_container';
import QuestionIndex from '../../components/question/question_index.jsx';
import * as QuestionActions from '../../actions/question_actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const testQuestions = {
  1: { id: 1, title: "Title1" },
  2: { id: 2, title: "Title2" },
  3: { id: 3, title: "Title3" }
};
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ question: testQuestions });

describe('question index', () => {
  let questionIndexWrapper;

  // beforeEach(() => {
  //   // QuestionActions.fetchQuestions = jest.fn(() => dispatch => {});
  //   questionIndexWrapper = mount(
  //     <QuestionIndexContainer store={testStore}/>
  //   ).find('QuestionIndex');
  // });

  describe('test without enzyme', () => {
    it('will be a simple test', () => {
      expect(2+2).toBe(4)
    })
  });

  // it('correctly maps state to props', () => {
  //   expect(postIndexWrapper.props().posts).toEqual(Object.values(testPosts));
  // });
  //
  // it('correctly maps dispatch to props', () => {
  //   expect(postIndexWrapper.props().fetchPosts).toBeDefined();
  //   expect(postIndexWrapper.props().deletePost).toBeDefined();
  // });
  //
  // it('fetches posts after being mounted', () => {
  //   expect(PostActions.fetchPosts).toBeCalled();
  // });
  //
  // it('renders a PostIndexItem for each post, passing in each post as a "post" prop', () => {
  //   const postIndexItems = postIndexWrapper.find('ul').children();
  //   expect(postIndexItems.nodes.length).toBe(3);
  //
  //   postIndexItems.forEach((item, i) => {
  //     expect(item.props().post).toEqual(testPosts[i+1]);
  //   });
  // });
  //
  // it('contains a PostFormContainer component', () => {
  //   const postForm = postIndexWrapper.find('FormContainer');
  //   expect(postForm.length).toBe(1);
  // });
});
