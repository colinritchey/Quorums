import {
  createComment,
  updateComment,
  deleteComment
} from '../../util/comment_api_util';

describe('the comment api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('createComment makes request and returns an ajax promise', () => {
    const comment = { body: 'Content' };
    const returnValue = createComment(comment);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/comments');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ comment });
    expect(returnValue).toEqual("ajax promise");
  });

  it('updateComment makes request and returns an ajax promise', () => {
    const comment = { id: 15, body: 'Content' };
    const returnValue = updateComment(comment);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/comments/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/patch/i);
    expect(ajaxCallArg.data).toEqual({ comment });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteComment makes request and returns an ajax promise', () => {
    const returnValue = deleteComment(15);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('api/comments/15');
    expect(ajaxCallArg.type || ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
