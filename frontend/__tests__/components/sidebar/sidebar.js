import React from 'react';
import { mount } from 'enzyme';

import Sidebar from '../../../components/sidebar/sidebar.jsx';
import SidebarContainer from '../../../components/sidebar/sidebar_container.js';
// import SubscriptionFormModal from '../../../components/modals/subscriptions.jsx';

import * as FilterActions from '../../../actions/filter_actions';
import * as TagActions from '../../../actions/tag_actions.js';
import * as SessionActions from '../../../actions/session_actions.js';
import * as QuestionActions from '../../../actions/question_actions.js';

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
  img_url: "filler",
  tag_ids: [2, 3]
}

const testComments = [
  { id: 1, body: "Body1", question_id: 1, user: testCurrentUser },
  { id: 2, body: "Body2", question_id: 1, user: testCurrentUser },
  { id: 3, body: "Body3", question_id: 1, user: testCurrentUser }
];

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const testStore = mockStore({
  session: { currentUser: testCurrentUser },
  tags: {1: 'Internet', 2: 'Politics', 3: 'Cooking'},
  filter: 'searchByTagId'
});

describe('comment index', () => {
  let sidebarWrapper;

  beforeEach(() => {
    FilterActions.updateFilter = jest.fn(() => dispatch => {});
    TagActions.fetchTags = jest.fn(() => dispatch => {});
    SessionActions.updateUser = jest.fn(() => dispatch => {});
    QuestionActions.fetchQuestions = jest.fn(() => dispatch => {});

    sidebarWrapper = mount(
      <SidebarContainer
        store={testStore}
        formType="home"
       />
   ).find('Sidebar');

  });

  it('correctly maps dispatches to props', () => {
    expect(sidebarWrapper.props().updateFilter).toBeDefined();
    expect(sidebarWrapper.props().updateUser).toBeDefined();
    expect(sidebarWrapper.props().fetchQuestions).toBeDefined();
    expect(sidebarWrapper.props().fetchTags).toBeDefined();
  });

  it('renders a tagitems', () => {
    const sidebarItems = sidebarWrapper.find('ul').children();

    // console.log(sidebarItems);
    // expect(sidebarItems.length).toBe(2);

    sidebarItems.forEach((item, i) => {
      // console.log(item);
      // expect(item.props().comment).toEqual(testComments[i]);
    });
  });

  it('contains a SubscriptionFormModal component', () => {

    const subForm = sidebarWrapper.find('SubscriptionFormModal');

    expect(subForm.length).toBe(1);
  });
});
