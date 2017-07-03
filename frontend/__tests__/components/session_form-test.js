import React from 'react';

import * as SessionActions from '../../actions/session_actions';
import SessionFormContainer from '../../components/session_form/session_form_container';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';

const currentUser = {
  username: "Test",
  id: 1
};

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ session: { currentUser, errors: [] } });

describe('post form container', () => {
  let sessionFormWrapper,
      usernameInput,
      passwordInput;

  beforeEach(() => {
    SessionActions.login = jest.fn(user => dispatch => {});
    SessionActions.signup = jest.fn(id => dispatch => {});
    SessionActions.logout = jest.fn(user => dispatch => {});
  });

  describe('creating a new session', () => {
    beforeEach(() => {
      sessionFormWrapper = mount(
        <SessionFormContainer store={testStore} />
      ).find('SessionForm');

      usernameInput = sessionFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'text'
      ));
      passwordInput = sessionFormWrapper.find('input').filterWhere(input => (
        input.props().type === 'password'
      ));

    });


    it('correctly maps state to props', () => {
      expect(sessionFormWrapper.props().loggedIn).toEqual(true);
    });

    it('correctly maps dispatch to props', () => {
      expect(sessionFormWrapper.props().signup).toBeDefined();
      expect(sessionFormWrapper.props().login).toBeDefined();
      expect(sessionFormWrapper.props().removeErrors).toBeDefined();
    });

    it('pre-fills title and body input fields with empty string', () => {
      expect(usernameInput.props().value).toEqual('');
      expect(passwordInput.props().value).toEqual('');
    });

    it('updates the username field when they change', () => {

      usernameInput.simulate('change', { target: { value: 'password' }});
      expect(usernameInput.props().value).toEqual('password');

    });

    it('updates the password field when they change', () => {

      passwordInput.simulate('change', { target: { value: 'Test' }});
      expect(passwordInput.props().value).toEqual('Test');

    });

    // it('triggers the correct action when submitted', () => {
    //   const newPost = { title: 'testTitle', body: 'testBody' };
    //   titleInput.simulate('change', { target: { value: newPost.title }});
    //   bodyInput.simulate('change', { target: { value: newPost.body }});
    //   postFormWrapper.find('form').simulate('submit');
    //
    //   expect(PostActions.createPost).toBeCalledWith(newPost);
    // });
  });

  // describe('updating an existing post', () => {
  //   beforeEach(() => {
  //     const testParams = { formType: 'edit', postId: testPost.id };
  //     postFormWrapper = mount(
  //       <PostFormContainer store={testStore} params={testParams} />
  //     ).find('PostForm');
  //
  //     titleInput = postFormWrapper.find('input').filterWhere(input => (
  //       input.props().type === 'text'
  //     ));
  //     bodyInput = postFormWrapper.find('textarea');
  //   });
  //
  //   it('correctly maps state to props', () => {
  //     expect(postFormWrapper.props().post).toEqual(testPost);
  //   });
  //
  //   it('correctly maps dispatch to props', () => {
  //     const props = postFormWrapper.props();
  //
  //     expect(props.fetchPost).toBeDefined();
  //     expect(props.action).toBeDefined();
  //   });
  //
  //   it('pre-fills title and body input fields with post data from the store', () => {
  //     expect(PostActions.fetchPost).toBeCalledWith(testPost.id);
  //     expect(titleInput.props().value).toEqual(testPost.title);
  //     expect(bodyInput.props().value).toEqual(testPost.body);
  //   });
  //
  //   it('triggers the correct action when submitted', () => {
  //     postFormWrapper.find('form').simulate('submit');
  //     expect(PostActions.updatePost).toBeCalledWith(testPost);
  //   });
  // });
});
