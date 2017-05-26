import {
  signup,
  updateUser,
  login,
  logout
} from '../../util/session_api_util';

describe('the api util for user and session controllers', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('signup makes request and returns an ajax promise', () => {
    const user = { username: 'Some Person', password: 'password' };
    const returnValue = signup(user);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/users');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ user });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateUser makes request and returns an ajax promise', () => {
    const user = { id: 15, username: 'Some Person', password: 'password' };
    const returnValue = updateUser(user);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/users/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ user });
    expect(returnValue).toEqual("ajax promise");
  });

  it('login makes request and returns an ajax promise', () => {
    const user = { username: 'Some Person', password: 'password' };
    const returnValue = login(user);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/session');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ user });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteQuestion makes request and returns an ajax promise', () => {
    const returnValue = logout();
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('api/session');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
