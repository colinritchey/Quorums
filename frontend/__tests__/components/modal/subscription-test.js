import React from 'react';
import { mount } from 'enzyme';

import SubscriptionFormModal from '../../../components/modals/subscriptions.jsx';
import * as SessionActions from '../../../actions/session_actions';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// const testQuestion = {
//   id: 1,
//   title: "Test Title",
//   body: "Body",
//   user: {
//     id: 2,
//     username: "Bill"
//   },
//   tag_ids: [2]
// };

const testCurrentUser = {
  id: 1,
  username: "Bob",
  img_url: "filler",
  tag_ids: [2, 3]
};

// const testTags = {
//   1: { id: 1, name: "Test 1"},
//   2: { id: 2, name: "Test 2"},
//   3: { id: 3, name: "Test 3"}
// };

const testTags = [
  { id: 1, name: "Test 1"},
  { id: 2, name: "Test 2"},
  { id: 3, name: "Test 3"}
];

// const testComments = [
//   { id: 1, body: "Body1", question_id: 1, user: testCurrentUser },
//   { id: 2, body: "Body2", question_id: 1, user: testCurrentUser },
//   { id: 3, body: "Body3", question_id: 1, user: testCurrentUser }
// ];

describe('subscription form modal', () => {
  let subFormModalWrapper;

  beforeEach(() => {
    SessionActions.updateUser = jest.fn(() => dispatch => {});

    subFormModalWrapper = mount(
      <SubscriptionFormModal
      currentUser={testCurrentUser}
      updateUser={SessionActions.updateUser}
      tags={testTags}
       />
    ).find('.sub-form');

  });

  it('renders tags ', () => {
    const tagItems = subFormModalWrapper.find('.sub-list-form').children();
    // const modalItem = subFormModalWrapper.find('Modal');
    console.log(tagItems);
    expect(tagItems.length).toBe(3);

    // tagItems.forEach((item, i) => {
    //   expect(item.props().tag).toEqual(tagItems[i]);
    // });
  });
});
