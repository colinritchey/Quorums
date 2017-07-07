import React from 'react';
import { mount } from 'enzyme';

import CommentIndex from '../../components/comment/comment_index.jsx';
import CommentIndexItem from '../../components/comment/comment_index_item.jsx';
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

const testComments = [
  { id: 1, body: "Body1", question_id: 1, user: testCurrentUser },
  { id: 2, body: "Body2", question_id: 1, user: testCurrentUser },
  { id: 3, body: "Body3", question_id: 1, user: testCurrentUser }
];

describe('comment index', () => {
  let commentIndexWrapper;

  beforeEach(() => {
    QuestionActions.createComment = jest.fn(() => dispatch => {});
    QuestionActions.updateComment = jest.fn(() => dispatch => {});
    QuestionActions.deleteComment = jest.fn(() => dispatch => {});

    commentIndexWrapper = mount(
      <CommentIndex
      comments={testComments}
      question={testQuestion}
      currentUser={testCurrentUser}
      createComment={QuestionActions.createComment}
      updateComment={QuestionActions.updateComment}
      deleteComment={QuestionActions.deleteComment}
       />
    );

  });

  it('renders a CommentIndexItem for each post, passing in each comment as a "comment" prop', () => {
    const commentIndexItems = commentIndexWrapper.find('ul').children();

    expect(commentIndexItems.length).toBe(3);

    commentIndexItems.forEach((item, i) => {
      expect(item.props().comment).toEqual(testComments[i]);
    });
  });

  // it('contains a CommentFormContainer component', () => {
  //
  //   const commentForm = commentIndexWrapper.find('FormModal');
  //
  //   expect(commentForm.length).toBe(1);
  // });
});
